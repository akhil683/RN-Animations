import {
  View,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  ViewToken,
} from "react-native";
import React from "react";
import ListItem from "@/components/ListItem";
import { useSharedValue } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

const data = new Array(50).fill(0).map((_, index) => ({ id: index }));
//[{id: 0,}, {id: 1},..... {id: 49}]

const FlastListAnimate = () => {
  const { width } = useWindowDimensions();
  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <FlatList
          data={data}
          onViewableItemsChanged={({ viewableItems: vItems }) => {
            console.log(vItems);
            viewableItems.value = vItems;
          }}
          renderItem={({ item }) => {
            return <ListItem item={item} viewableItems={viewableItems} />;
          }}
          contentContainerStyle={{
            gap: 20,
            paddingTop: 40,
          }}
        />
      </View>
    </>
  );
};

export default FlastListAnimate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
