import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialValue: 0,
  customValue: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.initialValue += action.payload;
    },
    decrease: (state, action) => {
      state.initialValue -= action.payload;
    },
    multiply: (state, action) => {
      state.initialValue *= action.payload;
    },
    divide: (state, action) => {
      state.initialValue /= action.payload;
    },
    reset: (state) => {state.initialValue = 0}
  },
});

// Action creators are generated for each case reducer function
export const { increase, decrease, multiply, divide, reset } = counterSlice.actions;

export default counterSlice.reducer;
