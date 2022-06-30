import { current } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    componentsAttributes: [],
    layout: [],
  },
};

export const saveSheetComponents = createSlice({
  name: "saveSheet",
  initialState,
  reducers: {
    setSaveSheetComponents: (state, action) => {
      if (action.payload.layout != undefined) {
        state.value.layout = action.payload.layout;
        return;
      }
      for (
        let index = 0;
        index < state.value.componentsAttributes.length;
        index++
      ) {
        const element = state.value.componentsAttributes[index];
        if (element.id == action.payload.id) {
          state.value.componentsAttributes[index] = element;
          return;
        }
      }
      state.value.componentsAttributes = [
        ...state.value.componentsAttributes,
        action.payload,
      ];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSaveSheetComponents } = saveSheetComponents.actions;

export default saveSheetComponents.reducer;
