import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Dashboard } from "../src/screens/Dashboard";
import { COLORS } from "../src/themes/colors";
import { DayDetails } from "@/src/screens/DayDetails";

import dayjs from "dayjs";
import "dayjs/locale/pl";
import isToday from "dayjs/plugin/isToday";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

dayjs.extend(isToday);
dayjs.locale("pl");

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={COLORS.background} />
        {/* <Dashboard /> */}
        <DayDetails />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
