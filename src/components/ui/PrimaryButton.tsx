import { Pressable, StyleSheet, Text } from "react-native";
import { Colors, Radius } from "@/constants/theme";

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function PrimaryButton({
  title,
  onPress,
  disabled = false,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: Colors.light.primary,
    borderRadius: Radius.xlarge,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  disabled: {
    opacity: 0.45,
  },

  pressed: {
    transform: [{ scale: 0.98 }],
  },

  text: {
    color: Colors.light.white,
    fontSize: 18,
    fontWeight: "600",
  },
});