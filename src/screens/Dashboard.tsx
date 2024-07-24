import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS } from "../themes/colors";
import { FollowingDays } from "../../components/FollowingDays";
import { useEffect, useState } from "react";
import { fetchCityData, fetchFollowingDays } from "../services/api";
import { Footer } from "../../components/Footer";
import { CityData, FollowingDaysType } from "../types/api";
import { ListContainer } from "@/components/ListContainer";

export const Dashboard = () => {
  const [current, setCurrent] = useState<null | CityData>(null);
  const [followingDays, setFollowingDays] = useState<null | FollowingDaysType>(
    null
  );

  const init = async () => {
    const response = await fetchCityData();
    setCurrent(response);

    const followingDaysRespons = await fetchFollowingDays();
    setFollowingDays(followingDaysRespons);
  };

  useEffect(() => {
    init();
  }, []);

  if (!current || !followingDays)
    return (
      <ActivityIndicator
        color={COLORS.sun}
        size="large"
        style={{ height: "100%" }}
      />
    );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.cityName}>{current.location.name}</Text>
        <Text style={styles.temperature}>{current.current.temp_c}°</Text>

        <View style={styles.weatherContainer}>
          <Image
            source={{
              uri: `https:${current.current.condition.icon}`,
            }}
            resizeMode="contain"
            width={150}
            height={150}
          />
          <Text style={styles.weather}>{current.current.condition.text}</Text>
        </View>

        <ListContainer>
          {followingDays.forecast.forecastday.map((day, index, allDays) => (
            <FollowingDays
              day={day}
              key={day.date}
              isLast={index === allDays.length - 1}
            />
          ))}
        </ListContainer>
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  weatherContainer: {
    alignItems: "center",
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
