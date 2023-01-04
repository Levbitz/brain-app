import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";

export default function App() {
  return (
    <ScrollView style={{ paddingTop: 35 }}>
      <View
        style={{
          backgroundColor: "#e0e0e0",
          flex: 1,
        }}
      >
        <StatusBar style="dark" />

        <HomeScreen />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
