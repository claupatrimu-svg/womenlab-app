import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { router } from "expo-router";

import { Colors } from "@/constants/theme";
import ScrollScreen from "@/components/ui/ScrollScreen";
import OptionCard from "@/components/ui/OptionCard";
import TextField from "@/components/ui/TextField";
import PrimaryButton from "@/components/ui/PrimaryButton";

type Props = {
  title: string;
  options: string[];
  next: string;
};

export default function QuestionScreen({
  title,
  options,
  next,
}: Props) {

  const [selected, setSelected] = useState<string[]>([]);
  const [other, setOther] = useState("");

  function toggle(option: string) {

    if (selected.includes(option)) {
      setSelected(selected.filter(item => item !== option));
    } else {
      setSelected([...selected, option]);
    }

  }

  const otraSeleccionada = selected.includes("Otra...");

  const formularioValido =
    selected.length > 0 &&
    (!otraSeleccionada || other.trim() !== "");

  function continuar() {

    if (!formularioValido) return;

    router.push(next as never);

  }

  return (

    <ScrollScreen>

      <Text style={styles.title}>
        {title}
      </Text>

      <View style={styles.list}>

        {options.map(option => (

          <OptionCard
            key={option}
            title={option}
            selected={selected.includes(option)}
            onPress={() => toggle(option)}
          />

        ))}

        {otraSeleccionada && (

          <TextField
            placeholder="Cuéntanos un poco más"
            value={other}
            onChangeText={setOther}
          />

        )}

      </View>

      <PrimaryButton
        title="Continuar"
        onPress={continuar}
        disabled={!formularioValido}
      />

    </ScrollScreen>

  );

}

const styles = StyleSheet.create({

  title: {
  fontSize: 32,
  fontWeight: "700",
  color: Colors.light.text,
  textAlign: "center",
  marginBottom: 32,
  lineHeight: 42,
},

  list: {
    marginBottom: 24,
  },

});