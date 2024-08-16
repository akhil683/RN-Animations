import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Text,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { Stack } from "expo-router";

const ParallaxImage = () => {
  const IMG_HEIGHT = 250;
  const { width } = useWindowDimensions();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOfset = useScrollViewOffset(scrollRef);
  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOfset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.7],
          ),
        },
        {
          scale: interpolate(
            scrollOfset.value,

            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [1, 1, 1.1],
          ),
        },
      ],
    };
  });
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOfset.value, [0, IMG_HEIGHT / 1.3], [0, 1]),
    };
  });

  return (
    <SafeAreaView>
      <StatusBar style="dark" />

      <Stack.Screen
        options={{
          headerTransparent: true,
          headerLeft: () => (
            <Text style={{ color: "red" }}>Back lansdf lknf </Text>
          ),
          headerBackground: () => (
            <Animated.View style={[styles.header, headerAnimatedStyle]} />
          ),
        }}
      />
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <View style={{ flex: 1 }}>
          <Animated.Image
            source={{
              uri: "https://images.unsplash.com/photo-1516112173450-2e73c1acc637?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={[{ width, height: IMG_HEIGHT }, imageAnimatedStyle]}
          />
        </View>
        <View style={{ height: 1000, backgroundColor: "white" }}>
          <Text>Parallax Effect</Text>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default ParallaxImage;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    height: 100,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
