import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: "",
    fileName: "",
  },
};

export const SheetName = createSlice({
  name: "sheetName",
  initialState,
  reducers: {
    setSheetName: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSheetName } = SheetName.actions;

export default SheetName.reducer;
