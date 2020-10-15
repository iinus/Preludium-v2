import React from "react";
import { View, StyleSheet } from "react-native";
import Swipe from "../components/Swipe";
import data from "../data/data";
import BackGroundSwirls from "../assets/BackgroundSwirls.svg";

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  playscreen: {
    backgroundColor: "#03444E",
    width: "100%",
    height: "100%",
  },
});

const PlayScreen = () => {
  return (
    <View style={styles.playscreen}>
      <BackGroundSwirls style={styles.background} />
      <Swipe data={data}></Swipe>
    </View>
  );
};

export default PlayScreen;
