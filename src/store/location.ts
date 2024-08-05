import { ListItem } from "@/hooks/useLocationList";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import "react-native-get-random-values";
import { v4 as uuidV4 } from "uuid";

interface LocationState {
  locations: ListItem[];
}

const initialState: LocationState = {
  locations: [],
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    addLocation: (state, { payload }: PayloadAction<Omit<ListItem, "id">>) => {
      state.locations.push({ id: uuidV4(), ...payload });
    },
    removeLocation: (state, { payload }: PayloadAction<ListItem>) => {
      const toRomoveIndex = state.locations.findIndex(
        (listElement) => listElement.id === payload.id
      );
      if (toRomoveIndex !== -1) {
        state.locations.splice(toRomoveIndex, 1);
      }
    },
  },
});

export const { addLocation, removeLocation } = locationSlice.actions;
