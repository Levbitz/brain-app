import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import DetailScreen from "./src/Screens/DetailsScreen/DetailScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="bottom tabs" component={BottomTabs} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarInactiveTintColor: "red",
        tabBarActiveTintColor: "green",
        tabBarHideOnScroll: true,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home-circle" size={24} color="red" />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="cart-outline"
              size={24}
              color="black"
            />
          ),
        }}
        name="cart"
        component={CartScreen}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="search" size={24} color="black" />
          ),
        }}
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Ionicons name="person" size={24} color="black" />,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const CartScreen = () => {
  return (
    <View>
      <Text> This is the Cart Page</Text>
    </View>
  );
};
const ProfileScreen = () => {
  return (
    <View>
      <Text> This is the Profile Screen</Text>
    </View>
  );
};
const SearchScreen = () => {
  return (
    <View>
      <Text> This is the Search Screen</Text>
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
