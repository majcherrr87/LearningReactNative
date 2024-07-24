import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

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
      <SafeAreaView style={styles.container}>
        <Root />
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
