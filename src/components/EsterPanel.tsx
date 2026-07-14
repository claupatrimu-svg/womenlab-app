import { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";

import ConversationOrchestrator from "@/conversation/conversation.orchestrator";

type Props = {
  visible: boolean;
  onClose: () => void;
};

type Message = {
  sender: "user" | "ester";
  text: string;
};

export default function EsterPanel({
  visible,
  onClose,
}: Props) {

  const [text, setText] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ester",
      text:
        "Hola Claudita 🌼\n\nQué alegría volver a encontrarnos.\n\n¿Cómo puedo acompañarte hoy?",
    },
  ]);

  async function send() {

    if (!text.trim()) return;

    const userMessage = text;

    setMessages((current) => [
      ...current,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setText("");

    const response =
      await ConversationOrchestrator.send(userMessage);

    setMessages((current) => [
      ...current,
      {
        sender: "ester",
        text: response,
      },
    ]);
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
    >
      <Pressable
        style={styles.overlay}
        onPress={onClose}
      >
        <Pressable style={styles.panel}>

          <Text style={styles.title}>
            🌼 Ester
          </Text>

          <ScrollView
            style={styles.chat}
            contentContainerStyle={{
              paddingBottom: 20,
            }}
          >
            {messages.map((message, index) => (

              <View
                key={index}
                style={[
                  styles.bubble,
                  message.sender === "user"
                    ? styles.userBubble
                    : styles.esterBubble,
                ]}
              >
                <Text style={styles.message}>
                  {message.text}
                </Text>
              </View>

            ))}
          </ScrollView>

          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="Escribe aquí..."
            multiline
            style={styles.input}
          />

          <Pressable
            style={styles.button}
            onPress={send}
          >
            <Text style={styles.buttonText}>
              Enviar
            </Text>
          </Pressable>

        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "flex-end",
  },

  panel: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 24,
    height: "82%",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 18,
  },

  chat: {
    flex: 1,
  },

  bubble: {
    padding: 14,
    borderRadius: 18,
    marginBottom: 12,
  },

  esterBubble: {
    backgroundColor: "#FFF7EF",
    alignSelf: "flex-start",
  },

  userBubble: {
    backgroundColor: "#EAF4FF",
    alignSelf: "flex-end",
  },

  message: {
    fontSize: 16,
    lineHeight: 24,
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 16,
    padding: 14,
    minHeight: 60,
    maxHeight: 120,
    marginTop: 10,
  },

  button: {
    marginTop: 14,
    backgroundColor: "#D66A2E",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 17,
  },

});