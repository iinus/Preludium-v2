import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { ActiveButton } from "../components/ActiveButton";
import BackGroundSwirls from "../assets/BackgroundSwirls.svg";
import Logo from "../assets/Logo.svg";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#03444E",
    width: "100%",
    height: "100%",
  },
  text: {
    color: "purple",
  },
  img: {
    height: 45,
    width: 240,
  },
  background: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  logo: {
    position: "absolute",
    top: SCREEN_HEIGHT * 0.2,
    left: SCREEN_WIDTH * 0.296,
  },
});

const StartScreen = ({ navigation }: NavigationStackProp) => {
  return (
    <View style={styles.container}>
      <Logo width={152} style={styles.logo} />
      <BackGroundSwirls style={styles.background} />
      <ActiveButton
        text="Start"
        textLine=""
        onPress={() => navigation.navigate("ChoosePacket")}
      />
    </View>
  );
};

export default StartScreen;
