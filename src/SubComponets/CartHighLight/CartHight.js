import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { DataContext } from "../../context/ProductContext/productContext";

const CartHight = () => {
  const { num } = useContext(DataContext);

  return <Text>{num}</Text>;
};

export default CartHight;

const styles = StyleSheet.create({});
