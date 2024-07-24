import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { CityData, FollowingDaysType } from "../types/api";
import { fetchCityData, fetchFollowingDays } from "../services/api";
import { COLORS } from "../themes/colors";
import dayjs from "dayjs";
import { ListItem } from "@/components/ListItem";
import { ListContainer } from "@/components/ListContainer";

export const DayDetails = () => {
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

  const day = followingDays.forecast.forecastday[0];
  const locationName = "Warszawa";

  return (
    <FlatList
      data={day.hour}
      contentContainerStyle={{ paddingBottom: 20 }}
      ListHeaderComponent={
        <View style={{ alignItems: "center" }}>
          <Text style={[styles.location, styles.text]}>{locationName}</Text>
          <Text style={[styles.data, styles.text]}>
            {dayjs(day.date).format("dddd, D MMMM YYYY")}
          </Text>
          <Image
            source={{ uri: `https:${day.day.condition.icon}` }}
            width={100}
            height={100}
          />
          <Text style={[styles.temperature, styles.text]}>{`${Math.floor(
            day.day.mintemp_c
          )}° - ${Math.ceil(day.day.maxtemp_c)}°`}</Text>
        </View>
      }
      renderItem={({ item: hour, index }) => {
        const isLast = index === day.hour.length - 1;
        return (
          <View
            style={[
              styles.item,
              index === 0 && styles.firstItem,
              isLast && styles.lastItem,
            ]}
          >
            <ListItem
              key={hour.time}
              isLast={isLast}
              title={hour.time}
              value={hour.temp_c}
              condition={hour.condition}
            />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  containet: {
    alignItems: "center",
    paddingBottom: 20,
  },
  location: {
    fontSize: 30,
    fontWeight: "bold",
  },
  data: {
    fontSize: 26,
    marginBottom: 20,
  },
  temperature: {
    fontSize: 40,
    fontWeight: "600",
  },
  text: {
    color: COLORS.text,
    marginTop: 20,
  },

  item: {
    backgroundColor: COLORS.lightBlue,
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  firstItem: {
    marginTop: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 10,
  },
  lastItem: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingBottom: 10,
  },
});
