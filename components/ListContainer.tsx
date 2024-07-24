import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "@/src/themes/colors";

type ListContainerProsp = {
  children: React.ReactNode;
};

export const ListContainer = ({ children }: ListContainerProsp) => {
  return <View style={styles.ListContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  ListContainer: {
    backgroundColor: COLORS.lightBlue,
    marginTop: 40,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
