import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    system: "",
    component: "",
  },
};

export const addComponentSlice = createSlice({
  name: "addComponent",
  initialState,
  reducers: {
    setAddComponent: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAddComponent } = addComponentSlice.actions;

export default addComponentSlice.reducer;
