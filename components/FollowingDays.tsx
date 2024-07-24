import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "@/src/themes/colors";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import isToday from "dayjs/plugin/isToday";
import { ForecastDay } from "@/src/types/api";

dayjs.extend(isToday);
dayjs.locale("pl");

type FollowingDaysProps = {
  day: ForecastDay;
  isLast: boolean;
};

export const FollowingDays = ({ day, isLast }: FollowingDaysProps) => {
  const date = dayjs(day.date).isToday()
    ? "Dzisiaj"
    : dayjs(day.date).format("dddd");

  return (
    <View style={[styles.container, !isLast && styles.separator]}>
      <Text style={styles.content}>{date}</Text>
      <Text style={[styles.content, styles.value]}>
        {Math.floor(day.day.mintemp_c)}° - {Math.ceil(day.day.maxtemp_c)}°
      </Text>
      <Image
        source={{
          uri: `https:${day.day.condition.icon}`,
        }}
        resizeMode="contain"
        width={40}
        height={40}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 40,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: COLORS.background,
  },
  content: {
    flex: 1,
    color: COLORS.text,
  },
  value: {
    textAlign: "center",
    fontWeight: "600",
  },
  type: {
    textAlign: "right",
    color: COLORS.sun,
  },
});
