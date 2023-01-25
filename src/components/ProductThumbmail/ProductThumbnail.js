import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const ProductThumbnail = ({ title, uri, price }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Details", {
          id: "1",
          name: "Brain",
          description: "jkdlfkjdjkdfklldfldflkkldf",
        })
      }
    >
      <View
        style={{
          backgroundColor: "#fff",
          marginBottom: 10,
          paddingVertical: 10,
          borderRadius: 15,
          //elevation: 10,
        }}
      >
        <Image
          source={{
            uri: uri,
          }}
          style={{
            width: width / 2.5,
            height: 150,
            resizeMode: "contain",
          }}
        />
        <Text
          style={{
            color: "gray",
            fontSize: 16,
            fontWeight: "600",
            paddingHorizontal: 10,
          }}
        >
          {title}...
        </Text>
        <Text
          style={{
            color: "gray",
            fontSize: 14,
            fontWeight: "600",
            paddingHorizontal: 10,
          }}
        >
          {price}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductThumbnail;

const styles = StyleSheet.create({});
