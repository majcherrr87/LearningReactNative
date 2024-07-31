import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from "@react-navigation/native";
import { COLORS } from "@/src/themes/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Root } from "@/src/navigation/Root";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import isToday from "dayjs/plugin/isToday";

dayjs.extend(isToday);
dayjs.locale("pl");

const myTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.background,
    card: COLORS.background,
  },
};

export const RootLayout = () => {
  return (
    <NavigationContainer theme={myTheme}>
      <SafeAreaProvider>
        <StatusBar backgroundColor={COLORS.background} />
        <Root />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
