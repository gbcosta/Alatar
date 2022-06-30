import { configureStore } from "@reduxjs/toolkit";
import componentSlice from "./reducer/testeSlice";
import addComponentSlice from "./reducers/addComponent";
import sheetNameSlice from "./reducers/nameSheet";
import saveSheetSlice from "./reducers/saveSheet";
import LoadedSheetComponentsSlice from "./reducers/loadedSheetComponents";
import loadFlagSlice from "./reducers/loadFlag";
export const store = configureStore({
  reducer: {
    component: componentSlice,
    addComponent: addComponentSlice,
    sheetName: sheetNameSlice,
    saveSheet: saveSheetSlice,
    loadedSheetComponents: LoadedSheetComponentsSlice,
    loadFlag: loadFlagSlice,
  },
});
