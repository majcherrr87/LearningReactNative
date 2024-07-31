import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { COLORS } from "../src/themes/colors";

import dayjs from "dayjs";
import "dayjs/locale/pl";
import isToday from "dayjs/plugin/isToday";
import { Root } from "@/src/navigation/Root";

dayjs.extend(isToday);
dayjs.locale("pl");

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={COLORS.background} />
      <Root />
    </SafeAreaProvider>
  );
}
