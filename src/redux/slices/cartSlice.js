import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axiosConfig';

export const fetchCart = createAsyncThunk('cart/fetchCart', async (_, { getState, rejectWithValue }) => {
  try {
    const token = getState().auth.token;
    const response = await axios.get('/cart', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const addToCart = createAsyncThunk('cart/addToCart', async (productData, { getState, rejectWithValue }) => {
  try {
    const token = getState().auth.token;
    if (!token) {
      throw new Error('Login required');
    }
    const response = await axios.post('/cart', productData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const updateCartItem = createAsyncThunk('cart/updateCartItem', async ({ id, qty }, { getState }) => {
    const token = getState().auth.token;
    const response = await axios.post(`/cart/${id}`, { qty }, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data.data;
});

export const removeCartItem = createAsyncThunk('cart/removeCartItem', async (id, { getState }) => {
    const token = getState().auth.token;
    const response = await axios.delete(`/cart/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return { id, cart: response.data.data.cart };
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    subtotal: 0,
  },
  reducers: {
    resetCart: (state) => {
      state.items = [];
      state.status = 'idle';
      state.error = null;
      state.subtotal = 0;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
    })
    .addCase(fetchCart.fulfilled, (state, action) => {
      if (action.payload) { // Check if payload is not null
          state.status = 'succeeded';
          state.items = action.payload.items || [];
          state.subtotal = action.payload.subtotal || 0;
      } else {
          state.status = 'succeeded';
          state.items = [];
          state.subtotal = 0;
      }
    })
    .addCase(fetchCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
    })
    .addCase(addToCart.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.subtotal += action.payload.total_price;
    })
    .addCase(addToCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
    })
    .addCase(updateCartItem.fulfilled, (state, action) => {
        const updatedItem = action.payload;
        const existingItem = state.items.find(item => item.id === updatedItem.id);
        if (existingItem) {
            existingItem.qty = updatedItem.qty;
            existingItem.total_price = updatedItem.total_price;
        }
        state.subtotal = action.payload.cart.subtotal;
    })
    .addCase(removeCartItem.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.subtotal = action.payload.cart.subtotal;
    });
  },
});

export const { resetCart } = cartSlice.actions;
export default cartSlice.reducer;
