import { useEffect, useRef } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Animated,
} from "react-native";
import { router } from "expo-router";
import { Colors } from "@/constants/theme";

export default function SplashScreen() {

  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    Animated.timing(opacity, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {

      Animated.timing(opacity, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {

        router.replace("/bienvenida");

      });

    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  return (

    <View style={styles.container}>

      <Animated.View
        style={[
          styles.content,
          {
            opacity,
          },
        ]}
      >

        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>
          WomenLab
        </Text>

        <Text style={styles.line}>
          Descubre tus fortalezas.
        </Text>

        <Text style={styles.line}>
          Fortalece tus raíces.
        </Text>

        <Text style={styles.line}>
          Transforma tu historia.
        </Text>

      </Animated.View>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },

  content: {
    alignItems: "center",
  },

  logo: {
    width: 190,
    height: 190,
    marginBottom: 20,
  },

  title: {
    fontSize: 34,
    fontWeight: "600",
    color: Colors.light.text,
    marginBottom: 36,
    letterSpacing: 0.4,
  },

  line: {
    fontSize: 18,
    color: Colors.light.textSecondary,
    textAlign: "center",
    lineHeight: 30,
  },

});