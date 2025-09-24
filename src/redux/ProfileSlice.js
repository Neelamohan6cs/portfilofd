import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BACKEND_URL = 'http://localhost:5000/api/profile';

// --- Async Thunks ---
export const fetchProfile = createAsyncThunk('profile/fetchProfile', async () => {
  const res = await axios.get(BACKEND_URL);
  return res.data;
});

export const createProfile = createAsyncThunk('profile/createProfile', async (formData) => {
  const res = await axios.post(BACKEND_URL, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
});

export const updateProfile = createAsyncThunk('profile/updateProfile', async ({ id, formData }) => {
  const res = await axios.put(`${BACKEND_URL}/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
});

export const deleteProfile = createAsyncThunk('profile/deleteProfile', async (id) => {
  const res = await axios.delete(`${BACKEND_URL}/${id}`);
  return res.data;
});

// --- Slice ---
const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Create
      .addCase(createProfile.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      // Update
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      // Delete
      .addCase(deleteProfile.fulfilled, (state) => {
        state.data = null;
      });
  },
});

export default profileSlice.reducer;
