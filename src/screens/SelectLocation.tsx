import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStockParamList } from "../navigation/Root";
import { COLORS } from "../themes/colors";
import { SearchInput } from "@/components/SearchInput";

interface ListItem {
  title: string;
  value: string;
}

export const SelectLocation = () => {
  const [list, setList] = useState<ListItem[]>([]);

  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStockParamList>>();
  return (
    <FlatList
      ListHeaderComponent={
        <SearchInput
          onSearch={(value) => setList([...list, { title: value, value }])}
        />
      }
      ListHeaderComponentStyle={styles.header}
      contentContainerStyle={styles.container}
      data={list}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigate("LocationDetails", { location: item.value })}
        >
          <Text style={styles.itemText} key={item.value}>
            {item.title}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: { marginBottom: 40 },
  item: {
    width: "100%",
    backgroundColor: COLORS.lightBlue,
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
  },

  itemText: { color: COLORS.text, fontSize: 16 },
});
