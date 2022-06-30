import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const loadFlag = createSlice({
  name: "loadFlag",
  initialState,
  reducers: {
    setLoadFlag: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoadFlag } = loadFlag.actions;

export default loadFlag.reducer;
