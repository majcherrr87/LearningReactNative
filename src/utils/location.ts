import { Alert } from "react-native";
import { fetchCityData } from "../services/api";
import * as Location from "expo-location";

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
  const cityData = await fetchCityData(
    `${location.coords.latitude}, ${location.coords.longitude}`
  );
  if ("location" in cityData) {
    return cityData.location.name;
  }
  return `${location.coords.latitude}, ${location.coords.longitude}`;
};

export const getLocation = async () => {
  const location = await Location.getCurrentPositionAsync();
  const locationName = await getLocationName(location);

  return {
    title: locationName,
    value: `${location.coords.latitude}, ${location.coords.longitude}`,
  };
};
