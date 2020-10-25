import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
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
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    ...Platform.select({
      ios: { fontFamily: "Courier" },
      android: { fontFamily: "monospace" },
    }),
  },
  button: {
    backgroundColor: "#F7F4EC",
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 86,
    borderColor: "black",
    borderWidth: 3,
  },
});

const StartScreen = ({ navigation }: NavigationStackProp) => {
  return (
    <View style={styles.container}>
      <Logo width={152} style={styles.logo} />
      <BackGroundSwirls style={styles.background} />
      <TouchableOpacity
        onPress={() => navigation.navigate("ChoosePacket")}
        style={styles.button}
      >
        <Text style={styles.text}>START</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartScreen;
