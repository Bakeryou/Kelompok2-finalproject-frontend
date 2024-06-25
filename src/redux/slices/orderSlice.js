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

export const fetchAllOrdersAdmin = createAsyncThunk('orders/fetchAll', async (_, { getState, rejectWithValue }) => {
  try {
    const token = getState().auth.token;
    const response = await axios.get('/orders-admin', {
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
    const token = getToken(getState());
    const response = await axios.post('/orders', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Action untuk update status order
export const updateOrderStatusAdmin = createAsyncThunk(
  'orders/updateStatusAdmin',
  async ({ orderId, status }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const response = await axios.post(
        `orders-admin/status/${orderId}`,
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

export const fetchClientKey = createAsyncThunk('orders/fetchClientKey', async (_, {getState, rejectWithValue }) => {
  try {
    const token = getState().auth.token;
    const response = await axios.get('/midtrans-client-key',{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.client_key;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const initialState = {
  orders: [],
  order: null,
  status: 'idle',
  error: null,
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    resetOrderState: (state) => {
      state.order = null;
      state.orders = null;
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
        state.orders = action.payload;
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
        const order = action.payload;
        state.orders = state.orders.filter((o) => o.id !== order.id);
        state.orders.push(order);
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
        state.order = action.payload;
      })
      .addCase(checkoutOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      })
      .addCase(updateOrderStatusAdmin.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateOrderStatusAdmin.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const updatedOrder = action.payload;
        const existingOrder = state.orders.find(order => order.id === updatedOrder.id);
        if (existingOrder) {
          existingOrder.status = updatedOrder.status;
        }
      })
      .addCase(updateOrderStatusAdmin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      })
      .addCase(updateOrderStatus.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const updatedOrder = action.payload;
        const existingOrder = state.orders.find(order => order.id === updatedOrder.id);
        if (existingOrder) {
          existingOrder.status = updatedOrder.status;
        }
      })
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      })
      .addCase(fetchClientKey.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchClientKey.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.clientKey = action.payload;
      })
      .addCase(fetchClientKey.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      });
  },
});

export const { resetOrderState } = orderSlice.actions;

export default orderSlice.reducer;
