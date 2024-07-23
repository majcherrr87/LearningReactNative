import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>Warszawa</Text>
      <Text style={styles.temperature}>22°</Text>
      <Ionicons name="sunny-outline" size={100} color="#fcd303" />
      <Text style={styles.weather}>Słonecznie</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  cityName: {
    fontSize: 30,
    color: "white",
  },
  temperature: {
    fontSize: 50,
    color: "white",
  },
  weather: {
    fontSize: 26,
    color: "white",
  },
});
