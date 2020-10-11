import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginTop: 20,
    borderColor: "black",
  },
  text: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
});

interface IButtonProps {
  text: string;
  onPress(): void;
}

export const Button = ({ text, onPress }: IButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);
