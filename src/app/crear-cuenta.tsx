import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { router } from "expo-router";

import { Colors } from "@/constants/theme";
import Screen from "@/components/ui/Screen";
import PrimaryButton from "@/components/ui/PrimaryButton";
import TextField from "@/components/ui/TextField";

export default function CrearCuentaScreen() {

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");

  const formularioValido =
    correo.trim() !== "" &&
    password.trim() !== "" &&
    confirmarPassword.trim() !== "";

  function continuar() {

    if (!formularioValido) return;

    router.push("/onboarding-mente");

  }

  return (

    <Screen>

      <Text style={styles.title}>
        Crea tu cuenta
      </Text>

      <Text style={styles.subtitle}>
        Tu información es privada y segura
      </Text>

      <TextField
        placeholder="Correo electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
        value={correo}
        onChangeText={setCorreo}
      />

      <View style={styles.spacing} />

      <TextField
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.spacing} />

      <TextField
        placeholder="Confirmar contraseña"
        secureTextEntry
        value={confirmarPassword}
        onChangeText={setConfirmarPassword}
      />

      <View style={styles.spacingLarge} />

      <PrimaryButton
        title="Crear mi cuenta"
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
    marginBottom: 16,
  },

  subtitle: {
    fontSize: 17,
    color: Colors.light.textSecondary,
    textAlign: "center",
    marginBottom: 40,
  },

  spacing: {
    height: 18,
  },

  spacingLarge: {
    height: 40,
  },

});