import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../themes/colors";
import dayjs from "dayjs";
import { ListItem } from "@/components/ListItem";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStockParamList } from "../navigation/Root";

export const DayDetails = () => {
  const {
    params: { day, locationName },
  } = useRoute<RouteProp<RootStockParamList, "DayDetails">>();

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
              title={dayjs(hour.time).format("HH:mm")}
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
