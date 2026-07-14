import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

type Props = {
  children: ReactNode;
};

export default function Screen({ children }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },

  content: {
    width: "100%",
    maxWidth: 420,
  },
  

});