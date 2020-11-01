import React from "react";
import { View, Text, StyleSheet, Platform, Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#BDBDBD",
    borderRadius: 25,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 106,
    bottom: 20,
    marginTop: 20,
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
    ...Platform.select({
      ios: { fontFamily: "Courier" },
      android: { fontFamily: "monospace" },
    }),
  },

  textLine: {
    color: "#828282",
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
    ...Platform.select({
      ios: { fontFamily: "Courier" },
      android: { fontFamily: "monospace" },
    }),
  },
});

interface IButtonProps {
  text: string;
  textLine: string;
}

export const InactiveButton = ({ text, textLine }: IButtonProps) => {
  const shakeAnimation = new Animated.Value(0);

  const startShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <Animated.View
      style={[styles.button, { transform: [{ translateX: shakeAnimation }] }]}
    >
      <TouchableOpacity
        style={{ width: "100%", height: "100%" }}
        onPress={() => {
          startShake();
        }}
      >
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.textLine}>{textLine}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
