import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axiosConfig';
import { toast } from 'react-toastify';

export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
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

export const createCategory = createAsyncThunk(
  'category/createCategory',
  async (categoryData, { getState }) => {
    try {
        const token = getState().auth.token;
        const response = await axios.post('/categories', categoryData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Category created successfully');
      return response.data.data;
    } catch (error) {
      toast.error('Failed to create category');
      throw error;
    }
  }
);

export const updateCategory = createAsyncThunk(
  'category/updateCategory',
  async ({ id, categoryData }, { getState }) => {
    try {
        const token = getState().auth.token;
        const response = await axios.post(`/categories/${id}`, categoryData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Category updated successfully');
      return response.data.data;
    } catch (error) {
      toast.error('Failed to update category');
      throw error;
    }
  }
);

export const deleteCategory = createAsyncThunk(
  'category/deleteCategory',
  async (id, { getState }) => {
    try {
        const token = getState().auth.token;
        await axios.delete(`/categories/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Category deleted successfully');
      return id;
    } catch (error) {
      toast.error('Failed to delete category');
      throw error;
    }
  }
);

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.categories.findIndex(
          (category) => category.id === action.payload.id
        );
        state.categories[index] = action.payload;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          (category) => category.id !== action.payload
        );
      });
  },
});

export default categorySlice.reducer;
