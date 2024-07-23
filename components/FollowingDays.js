import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "@/src/themes/colors";
import { Ionicons } from "@expo/vector-icons";

export const FollowingDays = ({ day, isLast }) => {
  return (
    <View style={[styles.container, !isLast && styles.separator]}>
      <Text style={styles.content}>{day.name}</Text>
      <Text style={[styles.content, styles.value]}>{day.value}</Text>
      <Ionicons
        name="sunny-outline"
        size={40}
        style={[styles.content, styles.type]}
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
