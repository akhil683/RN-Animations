import { View, ViewToken, useWindowDimensions } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

type ListItemProps = {
  viewableItems: Animated.SharedValue<ViewToken[]>;
  item: {
    id: number;
  };
};
const ListItem = React.memo(({ viewableItems, item }: ListItemProps) => {
  const { width } = useWindowDimensions();

  const rStyle = useAnimatedStyle(() => {
    // item is visible or not
    const isVisible = Boolean(
      viewableItems.value
        .filter((item) => item.isViewable)
        .find((viewableItem) => viewableItem.item.id === item.id),
    );
    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    };
  }, []);

  return (
    <Animated.View
      style={[
        {
          height: 80,
          width: width - 20,
          alignSelf: "center",
          backgroundColor: "#FACAD2",
          borderRadius: 15,
        },
        rStyle,
      ]}
    />
  );
});

export default ListItem;
