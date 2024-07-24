import React from "react";
import { Slot } from "expo-router";
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from "@react-navigation/native";
import { COLORS } from "@/src/themes/colors";

const myTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "rgb(3, 177, 252)",
  },
};

export const RootLayout = () => {
  return (
    <NavigationContainer theme={myTheme}>
      <Slot />;
    </NavigationContainer>
  );
};
