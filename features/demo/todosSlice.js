import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  pending: false,
  error: false,
};

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await res.json();
});

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.pending = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.pending = false;
        state.todos = action.payload;
      })
      .addCase(getTodos.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export default todosSlice.reducer;
