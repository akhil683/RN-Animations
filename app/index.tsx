import { Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        gap: 12,
        paddingTop: 24,
        marginHorizontal: 24,
      }}
    >
      <Link href={"/FlatlistAnimate"} style={styles.linkContainer}>
        <Text style={styles.linkText}>Flatlist Animate</Text>
      </Link>
      <Link href={"/ParallaxImage"} style={styles.linkContainer}>
        <Text style={styles.linkText}>Parallax Image</Text>
      </Link>
      <Link href={"/(sharedAnimation)/home"} style={styles.linkContainer}>
        <Text style={styles.linkText}>Shared Animation</Text>
      </Link>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  linkContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    display: "flex",
    backgroundColor: "black",
    borderRadius: 20,
    justifyContent: "center",
  },
  linkText: {
    color: "white",
    width: "100%",
    fontSize: 20,
  },
});
