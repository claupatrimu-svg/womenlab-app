import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors, Radius } from "@/constants/theme";

type Props = {
  title: string;
  selected: boolean;
  onPress: () => void;
};

export default function OptionCard({
  title,
  selected,
  onPress,
}: Props) {

  return (

    <Pressable
      onPress={onPress}
      style={[
        styles.card,
        selected && styles.selected,
      ]}
    >

      <Text style={styles.title}>
        {title}
      </Text>

      <View
        style={[
          styles.check,
          selected && styles.checkSelected,
        ]}
      >
        {selected && (
          <Text style={styles.checkText}>
            ✓
          </Text>
        )}
      </View>

    </Pressable>

  );

}

const styles = StyleSheet.create({

  card: {
    width: "100%",
    minHeight: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.light.white,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: Radius.medium,
    paddingHorizontal: 18,
    paddingVertical: 12,
    marginBottom: 10,
  },

  selected: {
    borderColor: Colors.light.primary,
    backgroundColor: "#FFF7F2",
  },

  title: {
    flex: 1,
    fontSize: 17,
    color: Colors.light.text,
    fontWeight: "500",
  },

  check: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.light.border,
    justifyContent: "center",
    alignItems: "center",
  },

  checkSelected: {
    backgroundColor: Colors.light.primary,
    borderColor: Colors.light.primary,
  },

  checkText: {
    color: Colors.light.white,
    fontSize: 14,
    fontWeight: "700",
  },

});