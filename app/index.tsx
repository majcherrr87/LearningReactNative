import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { COLORS } from "../src/themes/colors";

import dayjs from "dayjs";
import "dayjs/locale/pl";
import isToday from "dayjs/plugin/isToday";
import { Root } from "@/src/navigation/Root";
import { Provider as StoreProvider } from "react-redux";
import { persistor, store } from "@/src/store/store";
import { PersistGate } from "redux-persist/integration/react";

dayjs.extend(isToday);
dayjs.locale("pl");

export default function HomeScreen() {
  return (
    <>
      <StatusBar backgroundColor={COLORS.background} />
      <StoreProvider store={store}>
        <PersistGate persistor={persistor}>
          <Root />
        </PersistGate>
      </StoreProvider>
    </>
  );
}
