import { StyleSheet, TouchableOpacity, Alert } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "@/src/themes/colors";
import * as Location from "expo-location";
import { ListItem } from "@/hooks/useLocationList";
import {
  getLocation,
  showDefaultErrorAlert,
  showLocationUnavailableAlert,
  showPermissionDeniedAlert,
} from "@/src/utils/location";

interface SelectLocationByCoordinatesProps {
  onLocationFound: (item: Omit<ListItem, "id">) => void;
}

export const SelectLocationByCoordinates = ({
  onLocationFound,
}: SelectLocationByCoordinatesProps) => {
  const onButtonPress = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status === Location.PermissionStatus.DENIED) {
      showPermissionDeniedAlert();
    }
    if (status === Location.PermissionStatus.GRANTED) {
      try {
        const location = await getLocation();
        onLocationFound(location);
      } catch (error: any) {
        if (error.code === "ERR_LOCATION_SETTINGS_UNSATISFIED") {
          showLocationUnavailableAlert();
        } else {
          showDefaultErrorAlert();
        }
      }
    }
  };
  return (
    <TouchableOpacity style={styles.button} onPress={onButtonPress}>
      <Ionicons name="location-outline" size={24} color={COLORS.text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    alignSelf: "center",
  },
});
