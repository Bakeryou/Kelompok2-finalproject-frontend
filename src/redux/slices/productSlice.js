import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axiosConfig';
import { toast } from 'react-toastify';

export const fetchProducts = createAsyncThunk('products/fetchProducts', 
  async (_, { getState }) => {
    try {
        const token = getState().auth.token;
        const response = await axios.get('/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error) {
      toast.error('Failed to fetch products');
      throw error;
    }
});

export const addProduct = createAsyncThunk('products/addProduct', 
  async (formData, { getState }) => {
    try {
        const token = getState().auth.token;
        const response = await axios.post('/products', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Product created successfully');
      return response.data.data;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Failed to create product');
      }
      throw error;
    }
});

export const updateProduct = createAsyncThunk('products/updateProduct', 
  async ({ id, updatedData }, { getState }) => {
    try {
        const token = getState().auth.token;
        const response = await axios.post(`/products/${id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Product updated successfully');
      return response.data.data;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Failed to update product');
      }
      throw error;
    }
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', 
  async (id, { getState }) => {
    try {
        const token = getState().auth.token;
        await axios.delete(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Product deleted successfully');
      return id;
    } catch (error) {
      toast.error('Failed to delete product');
      throw error;
    }
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.products = [...action.payload];
    })
    .addCase(fetchProducts.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
    .addCase(addProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
    })
    .addCase(updateProduct.fulfilled, (state, action) => {
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    })
    .addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    });
  },
});

export default productSlice.reducer;
