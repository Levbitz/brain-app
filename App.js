import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { StyleSheet, Text, ScrollView, View, SafeAreaView } from "react-native";
import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import DetailScreen from "./src/Screens/DetailsScreen/DetailScreen";
import { DataProvider } from "./src/context/ProductContext/productContext";
import CartHight from "./src/SubComponets/CartHighLight/CartHight";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();

export default function App() {
  return (
    <DataProvider>
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
    </DataProvider>
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
          tabBarBadge: <CartHight />,
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
        component={MyTopTabs}
      />
    </Tab.Navigator>
  );
};

function MyTopTabs() {
  return (
    <TopTabs.Navigator>
      <TopTabs.Screen name="My Profile" component={ProfileScreen} />
      <TopTabs.Screen name="Order" component={OrdersScreen} />
      <TopTabs.Screen name="settings" component={SettingsScreen} />
    </TopTabs.Navigator>
  );
}

const CartScreen = () => {
  return (
    <View style={{ marginTop: 100 }}>
      <Text> This is the Cart Page</Text>
    </View>
  );
};
const ProfileScreen = () => {
  return (
    <SafeAreaView
      style={{
        paddingTop: 40,
      }}
    >
      <StatusBar hidden={true} />
      <View>
        <Text> This is the Profile Screen</Text>
        <Text> sddfsfd@gmail.com</Text>
      </View>
    </SafeAreaView>
  );
};
const OrdersScreen = () => {
  return (
    <View>
      <Text> This is the Orders Screen</Text>
      <Text> View yo orders belowr</Text>
    </View>
  );
};
const SettingsScreen = () => {
  return (
    <View>
      <Text> This is the setting Screen</Text>
      <Text> View yo fdoifdiodfio belowr</Text>
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
