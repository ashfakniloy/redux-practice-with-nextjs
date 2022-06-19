import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  pending: false,
  error: false,
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return await res.json();
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.pending = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.pending = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export default usersSlice.reducer;
