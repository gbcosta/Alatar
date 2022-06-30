import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    id: -1,
  },
};

export const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    setComponent: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setComponent } = componentSlice.actions;

export default componentSlice.reducer;
