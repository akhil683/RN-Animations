import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import cities, { CityType } from "@/constants/cities";

const screenWidth = Dimensions.get("window").width;

const CityGrid = () => {
  const renderItem = ({ item }: { item: CityType }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <FlatList
        data={cities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.container}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 2,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 4,
    resizeMode: "cover",
  },
  text: {
    textAlign: "center",
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CityGrid;
