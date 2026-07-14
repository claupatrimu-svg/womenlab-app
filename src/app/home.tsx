import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

import EsterIcon from "../../assets/images/gerbera_ester_icon.svg";
import EsterPanel from "@/components/EsterPanel";
import EsterService from "@/services/ester.service";

export default function HomeScreen() {
  const [open, setOpen] = useState(false);

  async function abrirEster() {
    try {
      Alert.alert("WomenLab", "Ester fue presionada");

      const data = await EsterService.testConnection();

      Alert.alert(
        "Respuesta de Supabase",
        JSON.stringify(data, null, 2)
      );

      setOpen(true);
    } catch (error: any) {
      Alert.alert(
        "Error",
        error?.message ?? JSON.stringify(error)
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        WomenLab
      </Text>

      <Text style={styles.subtitle}>
        HOME FUNCIONANDO
      </Text>

      <Pressable
        style={styles.flower}
        onPress={abrirEster}
      >
        <EsterIcon
          width={72}
          height={72}
        />
      </Pressable>

      <EsterPanel
        visible={open}
        onClose={() => setOpen(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#222222",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 18,
    color: "#777777",
  },

  flower: {
    position: "absolute",
    right: 24,
    bottom: 36,
  },
});