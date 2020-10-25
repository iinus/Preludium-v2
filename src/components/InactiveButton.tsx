import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

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

export const InactiveButton = ({ text, textLine }: IButtonProps) => (
  <View style={styles.button}>
    <Text style={styles.text}>{text}</Text>
    <Text style={styles.textLine}>{textLine}</Text>
  </View>
);
