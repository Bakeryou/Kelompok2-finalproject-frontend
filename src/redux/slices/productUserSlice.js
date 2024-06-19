import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axiosConfig';
import { toast } from 'react-toastify';

// Action creator untuk fetch categories
export const fetchCategories = createAsyncThunk(
  'productUser/fetchCategories',
  async (_, { getState }) => {
    try {
      const token = getState().auth.token;
      const response = await axios.get('/categories', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error) {
      toast.error('Failed to fetch categories');
      throw error;
    }
  }
);

// Action creator untuk fetch products
export const fetchProducts = createAsyncThunk(
  'productUser/fetchProducts',
  async (category = 'All', { getState }) => {
    try {
      const token = getState().auth.token;
      let url = '/products';
      if (category !== 'All') {
        url += `?category=${category.id}`;
      }
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error) {
      toast.error('Failed to fetch products');
      throw error;
    }
  }
);

const productUserSlice = createSlice({
  name: 'productUser',
  initialState: {
    products: [],
    categories: [],
    selectedCategory: 'All',
    status: 'idle',
    error: null,
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
        state.products.forEach((product) => {
          const category = state.categories.find((cat) => cat.id === product.category_id);
          product.category_name = category ? category.name : 'Uncategorized';
        });
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export const { setSelectedCategory } = productUserSlice.actions;
export default productUserSlice.reducer;
