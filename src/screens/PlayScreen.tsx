import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import Swipe from "../components/Swipe";
import data from "../data/data";
import BackGroundSwirls from "../assets/BackgroundSwirls.svg";
import Logo from "../assets/Logo.svg";
import Help from "../assets/Help.svg";
import { TouchableOpacity } from "react-native-gesture-handler";

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
  logo: {},
  help: {
    marginTop: 10,
  },
  topWrapper: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around",
    marginLeft: SCREEN_WIDTH * 0.21,
    marginTop: SCREEN_HEIGHT * 0.08,
  },
});

const PlayScreen = () => {
  return (
    <View style={styles.playscreen}>
      <View style={styles.topWrapper}>
        <Logo width={152} style={styles.logo} />
        <TouchableOpacity onPress={() => console.log("hello")}>
          <Help width={24} height={24} style={styles.help} />
        </TouchableOpacity>
      </View>
      <BackGroundSwirls style={styles.background} />
      <Swipe data={data}></Swipe>
    </View>
  );
};

export default PlayScreen;
