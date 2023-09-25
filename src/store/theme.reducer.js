import { createSlice } from "@reduxjs/toolkit";
import { colorPlates } from "../Theming/CustomColorPlates/Plates"


const themeSlice = createSlice({
  name: "theme",
  initialState: {
      currentPlate: colorPlates.blue.first,
      lastSelectedPlate: colorPlates.blue.first
  },
  reducers: {
    hoverOver(state, data) {
      state.currentPlate = colorPlates[data.payload.color][data.payload.selector]
    },
    hoverEnd(state) {
      state.currentPlate = JSON.parse(JSON.stringify(state.lastSelectedPlate))
    },
    selectedPlate(state) {
      state.lastSelectedPlate = JSON.parse(JSON.stringify(state.currentPlate))
    }
  },
});

export const { hoverEnd, hoverOver, selectedPlate } = themeSlice.actions;

export default themeSlice.reducer;
