import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Alert,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState("");
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Text>Hello World!</Text>
            <StatusBar style="auto" />
            <Image
              style={styles.tinyLogo}
              source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            />

            <Button
              title="Press me"
              onPress={() => Alert.alert("Simple Button pressed")}
            />
            <TextInput
              style={styles.input}
              onChangeText={(newValue) => onChangeText(newValue)}
              value={text}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 300,
    height: 300,
  },
  input: {
    height: 40,
    minWidth: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
