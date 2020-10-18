import React from "react";
import { View, StyleSheet, Dimensions, Text, Platform } from "react-native";
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
  text: {
    color: "#EA6A3B",
    fontSize: 14,
    marginBottom: 80,
    fontWeight: "bold",
    ...Platform.select({
      ios: { fontFamily: "Courier" },
      android: { fontFamily: "Space Mono" },
    }),
  },
});

const StartScreen = ({ navigation }: NavigationStackProp) => {
  return (
    <View style={styles.container}>
      <Logo width={152} style={styles.logo} />
      <Text style={styles.text}> Drikkelekspill, made with &lt;3 </Text>
      <BackGroundSwirls style={styles.background} />
      <ActiveButton
        text="START"
        height={68}
        onPress={() => navigation.navigate("ChoosePacket")}
      />
    </View>
  );
};

export default StartScreen;
