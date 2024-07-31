import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "@/src/themes/colors";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import { ForecastDay } from "@/src/types/api";
import { ListItem } from "./ListItem";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStockParamList } from "@/src/navigation/Root";

type FollowingDaysProps = {
  day: ForecastDay;
  isLast?: boolean;
  locationName: string;
};

export const FollowingDays = ({
  day,
  locationName,
  isLast = false,
}: FollowingDaysProps) => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStockParamList>>();
  const date = dayjs(day.date).isToday()
    ? "Dzisiaj"
    : dayjs(day.date).format("dddd");

  return (
    <ListItem
      isLast={isLast}
      title={date}
      value={`${Math.floor(day.day.mintemp_c)}° - ${Math.ceil(
        day.day.maxtemp_c
      )}°`}
      condition={day.day.condition}
      onPress={() => navigate("DayDetails", { day, locationName })}
    />
  );
};
