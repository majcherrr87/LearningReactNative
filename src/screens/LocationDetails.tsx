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
import { Footer } from "../../components/Footer";
import { ListContainer } from "@/components/ListContainer";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStockParamList } from "../navigation/Root";
import { useGetCityDataQuery, useGetFollowingDaysQuery } from "../store/api";

export const LocationDetails = () => {
  const {
    params: { location },
  } = useRoute<RouteProp<RootStockParamList, "LocationDetails">>();

  const { data: cityData } = useGetCityDataQuery({
    location,
  });

  const { data: followingDaysData } = useGetFollowingDaysQuery({ location });

  if (!cityData || !followingDaysData) {
    return (
      <ActivityIndicator
        color={COLORS.sun}
        size="large"
        style={{ height: "100%" }}
      />
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.cityName}>{cityData.location.name}</Text>
        <Text style={styles.temperature}>{cityData.current.temp_c}°</Text>

        <View style={styles.weatherContainer}>
          <Image
            source={{
              uri: `https:${cityData.current.condition.icon}`,
            }}
            resizeMode="contain"
            width={150}
            height={150}
          />
          <Text style={styles.weather}>{cityData.current.condition.text}</Text>
        </View>

        <ListContainer>
          {followingDaysData.forecast.forecastday.map((day, index, allDays) => (
            <FollowingDays
              day={day}
              key={day.date}
              isLast={index === allDays.length - 1}
              locationName={cityData.location.name}
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
