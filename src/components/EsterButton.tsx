import { Animated, Pressable, StyleSheet, Image } from "react-native";
import { useEffect, useRef } from "react";

type Props = {
  onPress: () => void;
};

export default function EsterButton({ onPress }: Props) {
  const scale = useRef(new Animated.Value(1)).current;
  const rotate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(scale, {
            toValue: 1.04,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(rotate, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(scale, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(rotate, {
            toValue: -1,
            duration: 2000,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  }, []);

  const rotation = rotate.interpolate({
    inputRange: [-1, 1],
    outputRange: ["-2deg", "2deg"],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            { scale },
            { rotate: rotation },
          ],
        },
      ]}
    >
      <Pressable onPress={onPress}>
        <Image
          source={require("../../assets/images/ester.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 24,
    bottom: 36,
  },

  image: {
    width: 72,
    height: 72,
  },
});