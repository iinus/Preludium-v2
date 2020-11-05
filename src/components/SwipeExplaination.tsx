import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import SwipeLeft from "../assets/SwipeLeft.svg";
import SwipeRight from "../assets/SwipeRight.svg";

const styles = StyleSheet.create({
  swipe: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 50,
    marginTop: "auto",
  },
  text: {
    ...Platform.select({
      ios: { fontFamily: "System" },
      android: { fontFamily: "Roboto" },
    }),
    color: "#4F4F4F",
    lineHeight: 14,
    fontWeight: "900",
  },
});

const SwipeExplaination = () => {
  return (
    <View style={styles.swipe}>
      <SwipeLeft />
      <Text style={styles.text}> SWIPE </Text>
      <SwipeRight />
    </View>
  );
};

export default SwipeExplaination;
