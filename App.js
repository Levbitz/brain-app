import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  SafeAreaView,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const btnHandler = () => {
    alert("Hello");
  };
  return (
    <ScrollView>
      <SafeAreaView
        style={{
          paddingTop: 50,
        }}
      >
        <View style={styles.container}>
          <Text style={styles.title}>React Native with Brain</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            <Pressable onPress={() => alert("pressable btn")}>
              <View
                style={{
                  backgroundColor: "yellow",
                  marginVertical: 10,
                  alignSelf: "center",
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 10,
                  elevation: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontSize: 20,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Pressable btn
                </Text>
              </View>
            </Pressable>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "red",
                  marginVertical: 10,
                  alignSelf: "center",
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 10,
                  elevation: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontSize: 20,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Pressable btn
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <Button onPress={btnHandler} title="This is my React Native button" />

          <Image
            style={{
              width: 400,
              height: 200,
              alignSelf: "center",
            }}
            source={{
              uri: "https://webimg.netlify.app/images/topsellers/python.png",
            }}
          />
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Card />
            <Card />
            <Card />
          </ScrollView>

          <StatusBar style="dark" />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const Card = () => {
  return (
    <View
      style={{
        backgroundColor: "red",

        marginHorizontal: 20,
        marginVertical: 20,
        height: 100,
        width: 300,
      }}
    >
      <Text style={styles.subtitle}> Brain</Text>
    </View>
  );
};

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
