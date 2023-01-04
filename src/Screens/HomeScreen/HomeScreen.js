import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TopSellingPdts from "../../components/TopSellingPdts/TopSellingPdts";
import TopHorizontalCategories from "../../components/TopHorizontalCategories/TopHorizontalCategories";

const HomeScreen = () => {
  return (
    <View
      style={{
        backgroundColor: "#e0e0e0",
      }}
    >
      <TopHorizontalCategories />
      <TopSellingPdts />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
