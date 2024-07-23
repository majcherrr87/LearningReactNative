import { Linking, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "@/src/themes/colors";

export const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Powered by</Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL("https://www.weatherapi.com/")}
      >
        WeatherAPI.com
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 20,
  },
  text: {
    color: COLORS.text,
  },
  link: {
    color: COLORS.link,
  },
});
