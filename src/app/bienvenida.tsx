import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/theme";

export default function BienvenidaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenida a WomenLab 💛</Text>
      <Text style={styles.subtitle}>
        Aquí comenzará la siguiente pantalla del UX Blueprint.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: Colors.light.text,
    marginBottom: 16,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 18,
    color: Colors.light.textSecondary,
    textAlign: "center",
  },

});