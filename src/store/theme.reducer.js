import { createSlice } from "@reduxjs/toolkit";



const themeSlice = createSlice({
  name: "theme",
  initialState: {
    colorPlate: {},
  },
  reducers: {
    changeColorPlate(state, colorPlateName) {
      // state.colorPlate
    },
  },
});

export const { changeColorPlate } = themeSlice.actions;

export default themeSlice.reducer;
