import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const TopHorizontalCategories = () => {
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
        Categories
      </Text>

      <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <SingleCategory
            uri={"https://ug.jumia.is/cms/UG_WK_49_JAN_THUMBNAILS_Fashion.png"}
            categoryName={"Women"}
          />
          <SingleCategory
            uri="https://ug.jumia.is/cms/UG_WK_49_JAN_THUMBNAILS_Groceries.png"
            categoryName={"Men"}
          />
          <SingleCategory categoryName={"Electronics"} />
          <SingleCategory categoryName={"Kids"} />
          <SingleCategory categoryName={"Phones"} />
          <SingleCategory categoryName={"Others"} />
        </ScrollView>
      </View>
    </View>
  );
};

export default TopHorizontalCategories;

const styles = StyleSheet.create({});

const SingleCategory = ({ categoryName, uri }) => {
  return (
    <View
      style={{
        marginHorizontal: 10,
      }}
    >
      <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
        }}
        source={{
          uri: uri,
        }}
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginBottom: 20,
          color: "gray",
        }}
      >
        {categoryName}
      </Text>
    </View>
  );
};
