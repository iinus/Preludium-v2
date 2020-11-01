import React from "react";
import { View, Text, StyleSheet } from "react-native";
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
});

const SwipeExplaination = () => {
  return (
    <View style={styles.swipe}>
      <SwipeLeft />
      <Text> SWIPE </Text>
      <SwipeRight />
    </View>
  );
};

export default SwipeExplaination;
