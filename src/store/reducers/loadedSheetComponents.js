import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    components: [],
    layout: [],
  },
};

export const loadedSheetComponents = createSlice({
  name: "loadedSheetComponents",
  initialState,
  reducers: {
    setLoadedSheetComponents: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoadedSheetComponents } = loadedSheetComponents.actions;

export default loadedSheetComponents.reducer;
