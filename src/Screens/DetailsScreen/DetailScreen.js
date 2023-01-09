import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { id, name, description } = route.params;

  return (
    <SafeAreaView
      style={{
        paddingVertical: 30,
        paddingHorizontal: 30,
        backgroundColor: "#F5FCFF",
      }}
    >
      <View>
        <AntDesign
          onPress={() => navigation.goBack()}
          name="arrowleft"
          size={44}
          color="black"
        />
        <Text style={{ fontSize: 30 }}>DetailScreen</Text>
        <Text style={{ fontSize: 30 }}>{id}</Text>
        <Text style={{ fontSize: 30 }}>{name}</Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
