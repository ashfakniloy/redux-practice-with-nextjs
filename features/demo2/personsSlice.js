import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  persons: [],
};

export const personsSlice = createSlice({
  name: "persons",
  initialState,
  reducers: {
    addPerson: (state, action) => {
      state.persons = [...state.persons, action.payload];
    },
  },
});

export const { addPerson } = personsSlice.actions;

export default personsSlice.reducer;
