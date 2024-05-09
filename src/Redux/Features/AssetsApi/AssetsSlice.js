import { createSlice } from "@reduxjs/toolkit";

const assetsSlice = createSlice({
  name: "assets",
  initialState: {
    // Initial state here
  },
  reducers: {
    // Reducer functions here
  },
});

export const { reducer: assetsReducer } = assetsSlice;
export const { actions } = assetsSlice;
