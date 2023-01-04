import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductThumbnail from "../ProductThumbmail/ProductThumbnail";

const TopSellingPdts = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 20,
          color: "gray",
        }}
      >
        Top Selling
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <ProductThumbnail />
        <ProductThumbnail />
        <ProductThumbnail />
        <ProductThumbnail />
      </View>
    </View>
  );
};

export default TopSellingPdts;

const styles = StyleSheet.create({});
