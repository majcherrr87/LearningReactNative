import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from "react-native";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStockParamList } from "../navigation/Root";
import { COLORS } from "../themes/colors";
import { SearchInput } from "@/components/SearchInput";
import { useLocationList } from "@/hooks/useLocationList";
import Ionicons from "@expo/vector-icons/Ionicons";

export const SelectLocation = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStockParamList>>();
  const { list, addTOList, removeFromList } = useLocationList();
  return (
    <FlatList
      ListHeaderComponent={
        <SearchInput onSearch={(value) => addTOList({ title: value, value })} />
      }
      ListHeaderComponentStyle={styles.header}
      contentContainerStyle={styles.container}
      data={list}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigate("LocationDetails", { location: item.value })}
        >
          <Text style={styles.itemText} key={item.value}>
            {item.title}
          </Text>
          <TouchableOpacity onPress={() => removeFromList(item)}>
            <Ionicons name="trash-outline" size={24} color={COLORS.error} />
          </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-between",
  },

  itemText: { color: COLORS.text, fontSize: 16 },
});
