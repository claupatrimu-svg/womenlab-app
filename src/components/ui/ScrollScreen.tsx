import { ReactNode } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

type Props = {
  children: ReactNode;
};

export default function ScrollScreen({ children }: Props) {

  return (

    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      <View style={styles.wrapper}>
        {children}
      </View>

    </ScrollView>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    paddingHorizontal: 32,
    paddingTop: 50,
    paddingBottom: 40,
    alignItems: "center",
  },

  wrapper: {
    width: "100%",
    maxWidth: 420,
  },

});