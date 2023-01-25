import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ProductThumbnail from "../ProductThumbmail/ProductThumbnail";

import { DataContext } from "../../context/ProductContext/productContext";

const TopSellingPdts = () => {
  const { products } = useContext(DataContext);
  return products ? (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 20,
          color: "gray",
        }}
      ></Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {products.slice(0, 8).map((product, index) => {
          //console.log(product);
          const { title, sliders, price } = product;
          return (
            <ProductThumbnail
              title={title ? title.slice(0, 15) : "loading"}
              uri={sliders && sliders.length > 0 ? sliders[0] : null}
              price={price}
              key={index}
            />
          );
        })}
      </View>
    </View>
  ) : (
    <Text>Loading</Text>
  );
};

export default TopSellingPdts;

const styles = StyleSheet.create({});
