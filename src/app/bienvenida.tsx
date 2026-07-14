import { Text, StyleSheet } from "react-native";
import { router } from "expo-router";

import { Colors } from "@/constants/theme";
import Screen from "@/components/ui/Screen";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function BienvenidaScreen() {

  function continuar() {
    router.push("/registro");
  }

  return (
    <Screen>

      <Text style={styles.title}>
        Qué alegría tenerte aquí
      </Text>

      <Text style={styles.description}>
        Este es tu espacio
      </Text>

      <PrimaryButton
        title="Comencemos"
        onPress={continuar}
      />

    </Screen>
  );
}

const styles = StyleSheet.create({

  title: {
    fontSize: 34,
    fontWeight: "700",
    color: Colors.light.text,
    textAlign: "center",
    marginBottom: 20,
  },

  description: {
    fontSize: 20,
    color: Colors.light.textSecondary,
    textAlign: "center",
    marginBottom: 60,
  },

});