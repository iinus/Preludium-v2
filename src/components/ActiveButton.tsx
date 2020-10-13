import React from "react";
import { TouchableOpacity, Text, StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginTop: 20,
    borderColor: "black",
    borderWidth: 3,
  },
  text: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    ...Platform.select({
      ios: { fontFamily: "Courier" },
      android: { fontFamily: "Space Mono" },
    }),
  },
});

interface IButtonProps {
  text: string;
  onPress(): void;
}

export const ActiveButton = ({ text, onPress }: IButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);
