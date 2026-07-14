import React from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";

import { Colors } from "@/constants/theme";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export default function EsterSheet({
  visible,
  onClose,
}: Props) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
    >
      <View style={styles.overlay}>

        <View style={styles.sheet}>

          <Text style={styles.flower}>
            🌼
          </Text>

          <Text style={styles.title}>
            Hola, soy Ester
          </Text>

          <Text style={styles.message}>
            Gracias por volver.

            {"\n\n"}

            Estoy muy feliz de comenzar este camino contigo.

            {"\n\n"}

            ¿Cómo puedo acompañarte hoy?
          </Text>

          <Pressable
            style={styles.button}
            onPress={onClose}
          >
            <Text style={styles.buttonText}>
              Comenzar
            </Text>
          </Pressable>

        </View>

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.25)",
    justifyContent: "flex-end",
  },

  sheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 28,
  },

  flower: {
    fontSize: 44,
    textAlign: "center",
    marginBottom: 12,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.light.text,
    textAlign: "center",
    marginBottom: 18,
  },

  message: {
    fontSize: 17,
    color: Colors.light.textSecondary,
    lineHeight: 28,
    textAlign: "center",
    marginBottom: 28,
  },

  button: {
    backgroundColor: Colors.light.primary,
    paddingVertical: 16,
    borderRadius: 16,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 16,
  },

});