import { ScrollView, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "../themes/colors";
import { FollowingDays } from "../../components/FollowingDays";

const FOLLOWING_DAYS = [
  { id: "112qsdsads", name: "Dzisiaj", value: 22, type: "sun" },
  {
    id: "232323dsads",
    name: "Wtorek",
    value: 22,
    type: "sun",
  },
  {
    id: "112qfffsads",
    name: "Środa",
    value: 22,
    type: "sun",
  },
  //   {
  //     id: "112adsada111sads",
  //     name: "Czwartek",
  //     value: 22,
  //     type: "sun",
  //   },
  //   {
  //     id: "112q",
  //     name: "Pątek",
  //     value: 22,
  //     type: "sun",
  //   },
  //   {
  //     id: "12222222qsdsads",
  //     name: "Sobota",
  //     value: 22,
  //     type: "sun",
  //   },
  //   {
  //     id: "112qnnnnnnnnnnads",
  //     name: "Niedziela",
  //     value: 22,
  //     type: "sun",
  //   },
  //   {
  //     id: "112qnnnnnnnads",
  //     name: "Niedziela",
  //     value: 22,
  //     type: "sun",
  //   },
  //   {
  //     id: "112qnnnnnnnnnnas",
  //     name: "Niedziela",
  //     value: 22,
  //     type: "sun",
  //   },
  //   {
  //     id: "112qnnnnnnnnnnad",
  //     name: "Niedziela",
  //     value: 22,
  //     type: "sun",
  //   },
  //   {
  //     id: "12qnnnnnnnnnnads",
  //     name: "Niedziela",
  //     value: 22,
  //     type: "sun",
  //   },
  //   {
  //     id: "112nnnnnnnnnads",
  //     name: "Niedziela",
  //     value: 22,
  //     type: "sun",
  //   },
  //   {
  //     id: "11llllnnnnnnnnads",
  //     name: "Niedziela",
  //     value: 22,
  //     type: "sun",
  //   },
  //   {
  //     id: "112qnnnnnnbbads",
  //     name: "Niedziela",
  //     value: 22,
  //     type: "sun",
  //   },
];

export const Dashboard = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.cityName}>Warszawa</Text>
        <Text style={styles.temperature}>22°</Text>

        <View style={styles.weatherContainer}>
          <Ionicons name="sunny-outline" size={100} color={COLORS.sun} />
          <Text style={styles.weather}>Słonecznie</Text>
        </View>

        <View style={styles.followingDaysContainer}>
          {FOLLOWING_DAYS.map((item, index) => (
            <FollowingDays
              day={item}
              key={item.id}
              isLast={index === FOLLOWING_DAYS.length - 1}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  weatherContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  cityName: {
    fontSize: 30,
    color: COLORS.text,
    marginTop: 20,
  },
  temperature: {
    fontSize: 72,
    fontWeight: "600",
    color: COLORS.text,
    marginTop: 20,
  },
  weather: {
    fontSize: 26,
    color: COLORS.text,
  },
  followingDaysContainer: {
    margin: 20,
    marginTop: 40,
    backgroundColor: COLORS.lightBlue,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
