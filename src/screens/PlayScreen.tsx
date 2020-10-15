import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Swipe from "../components/Swipe";
import data from "../data/data";
import BackGroundSwirls from "../assets/BackgroundSwirls.svg";
import Logo from "../assets/Logo.svg";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

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
  logo: {
    position: "absolute",
    top: SCREEN_HEIGHT * 0.08,
    left: SCREEN_WIDTH * 0.296,
  },
});

const PlayScreen = () => {
  return (
    <View style={styles.playscreen}>
      <Logo width={152} style={styles.logo} />
      <BackGroundSwirls style={styles.background} />
      <Swipe data={data}></Swipe>
    </View>
  );
};

export default PlayScreen;
