import { Alert } from "react-native";
import * as Location from "expo-location";
import { weatherApi } from "../store/api";
import { store } from "../store/store";

export const showPermissionDeniedAlert = () => {
  Alert.alert(
    "Brak uprawnień",
    "Aby móc korzystać z funkcjinalności przejdź do ustawień i pozwól na lokalizację."
  );
};

export const showLocationUnavailableAlert = () => {
  Alert.alert(
    "Lokalizacja niedosępna",
    "Wygląda na to że pobieranie lokalizacji zakończyło się niepowodzeniem. Przejdź do ustawień i sprawdź czy funkcjonalność jest włączona "
  );
};

export const showDefaultErrorAlert = () => {
  Alert.alert(
    "Lokalizacja niedosępna",
    "Pobieranie lokalizacji nie powiodło się "
  );
};

const getLocationName = async (location: Location.LocationObject) => {
  try {
    const cityData = await store
      .dispatch(
        weatherApi.endpoints.getCityData.initiate({
          location: `${location.coords.latitude}, ${location.coords.longitude}`,
        })
      )
      .unwrap();

    return cityData.location.name;
  } catch (e) {
    return `${location.coords.latitude}, ${location.coords.longitude}`;
  }
};

export const getLocation = async () => {
  const location = await Location.getCurrentPositionAsync();
  const locationName = await getLocationName(location);

  return {
    title: locationName,
    value: `${location.coords.latitude}, ${location.coords.longitude}`,
  };
};
