import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axiosConfig';

export const fetchUserData = createAsyncThunk(
  'profile/fetchUserData',
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get('/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async ({ token, formData }, { rejectWithValue }) => {
    try {
      await axios.post('/update-profile', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      return { message: 'Profile saved' };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updatePassword = createAsyncThunk(
  'profile/updatePassword',
  async ({ token, passwordData }, { rejectWithValue }) => {
    try {
      await axios.post('/update-password', passwordData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return { message: 'Password changed' };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: '',
    email: '',
    username: '',
    phone_number: '',
    address: '',
    postal_code: '',
    city: '',
    old_password: '',
    new_password: '',
    confirm_password: '',
    message: '',
    error: null,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phone_number = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setPostalCode: (state, action) => {
      state.postal_code = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setOldPassword: (state, action) => {
        state.old_password = action.payload;
    },
    setNewPassword: (state, action) => {
        state.new_password = action.payload;
    },
    setConfirmPassword: (state, action) => {
        state.confirm_password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.fulfilled, (state, action) => {
        const { name, email, username, phone_number, address, postal_code, city } = action.payload;
        state.name = name;
        state.email = email;
        state.username = username;
        state.phone_number = phone_number;
        state.address = address;
        state.postal_code = postal_code;
        state.city = city;
        state.error = null;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.error = null;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.error = null;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { setName, setEmail, setUsername, setPhoneNumber, setAddress, setPostalCode, setCity, setOldPassword, setNewPassword, setConfirmPassword } =
  profileSlice.actions;
export default profileSlice.reducer;
