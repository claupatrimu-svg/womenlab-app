import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { Colors, Radius } from "@/constants/theme";

type Props = TextInputProps;

export default function TextField(props: Props) {
  return (
    <TextInput
      placeholderTextColor="#A8A8A8"
      autoCorrect={false}
      style={styles.input}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.light.border,
    backgroundColor: Colors.light.surface,
    borderRadius: Radius.medium,
    paddingVertical: 18,
    paddingHorizontal: 20,
    fontSize: 18,
    color: Colors.light.text,
  },
});