import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axiosConfig';

// Action untuk mengambil semua order
export const fetchAllOrders = createAsyncThunk('orders/fetchAll', async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const response = await axios.get('/orders', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });
  
  // Action untuk mengambil order berdasarkan ID
  export const fetchOrderById = createAsyncThunk('orders/fetchById', async (orderId, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const response = await axios.get(`/orders/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });

  const getToken = (state) => state.auth.token;

  // Action untuk checkout order baru
  export const checkoutOrder = createAsyncThunk('orders/checkout', async (formData, { getState, rejectWithValue }) => {
    try {
      // console.log('Sending order data:', formData);
      const token = getToken(getState());
      const response = await axios.post('/orders', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      // console.error('Error checking out order:', error);
      return rejectWithValue(error.response.data);
    }
  });
  
  // Action untuk update status order
  export const updateOrderStatus = createAsyncThunk(
    'orders/updateStatus',
    async ({ orderId, status }, { getState, rejectWithValue }) => {
      try {
          const token = getState().auth.token;
        const response = await axios.post(
          `orders/status/${orderId}`,
          { status },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  
const initialState = {
  orders: [],
  order: null,
  status: 'idle',
  error: null,
};

// Ambil token dari state auth
// const getToken = (state) => state.auth.token;

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    resetOrderState: (state) => {
      state.order = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = action.payload.orders;
      })
      .addCase(fetchAllOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      })
      .addCase(fetchOrderById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOrderById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.order = action.payload.order;
      })
      .addCase(fetchOrderById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      })
      .addCase(checkoutOrder.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkoutOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.order = action.payload.order;
      })
      .addCase(checkoutOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      })
      .addCase(updateOrderStatus.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.order = action.payload.order;
      })
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      });
  },
});

export const { resetOrderState } = orderSlice.actions;

export default orderSlice.reducer;
