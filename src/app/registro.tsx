import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { router } from "expo-router";

import { Colors } from "@/constants/theme";
import Screen from "@/components/ui/Screen";
import PrimaryButton from "@/components/ui/PrimaryButton";
import TextField from "@/components/ui/TextField";

export default function RegistroScreen() {

  const [nombre, setNombre] = useState("");
  const [nombrePreferido, setNombrePreferido] = useState("");

  const formularioValido =
    nombre.trim() !== "" &&
    nombrePreferido.trim() !== "";

  function continuar() {

    if (!formularioValido) return;

    router.push("/crear-cuenta");

  }

  return (

    <Screen>

      <Text style={styles.title}>
        ¿Cómo te llamas?
      </Text>

      <TextField
        placeholder="Por ejemplo: Claudia"
        value={nombre}
        onChangeText={setNombre}
        autoCapitalize="words"
        returnKeyType="next"
      />

      <View style={styles.spacing} />

      <Text style={styles.question}>
        ¿Cómo prefieres que te llamemos?
      </Text>

      <TextField
        placeholder="Por ejemplo: Clau"
        value={nombrePreferido}
        onChangeText={setNombrePreferido}
        autoCapitalize="words"
        returnKeyType="done"
      />

      <View style={styles.spacingLarge} />

      <PrimaryButton
        title="Continuar"
        onPress={continuar}
        disabled={!formularioValido}
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
    marginBottom: 40,
  },

  question: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.light.text,
    marginBottom: 12,
  },

  spacing: {
    height: 28,
  },

  spacingLarge: {
    height: 40,
  },

});