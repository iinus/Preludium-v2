import React from "react";
import { TouchableOpacity, Text, StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F7F4EC",
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    bottom: 20,
    marginTop: 20,
    borderColor: "black",
    borderWidth: 3,
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
    ...Platform.select({
      ios: { fontFamily: "Courier" },
      android: { fontFamily: "Space Mono" },
    }),
  },

  textLine: {
    color: "#828282",
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
    ...Platform.select({
      ios: { fontFamily: "Courier" },
      android: { fontFamily: "Space Mono" },
    }),
  },
});

interface IButtonProps {
  text: string;
  textLine?: string;
  onPress(): void;
  height: number;
}

export const ActiveButton = ({
  text,
  textLine,
  onPress,
  height,
}: IButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, { height: height }]}
  >
    <Text style={styles.text}>{text}</Text>
    <Text style={styles.textLine}>{textLine}</Text>
  </TouchableOpacity>
);
