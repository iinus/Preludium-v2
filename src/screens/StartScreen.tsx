import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Platform,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import BackGroundSwirls from "../assets/BackgroundSwirls.svg";
import Kork from "../assets/korkBig.svg";
import Kort from "../assets/kort.svg";

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

  kort: {
    position: "absolute",
    top: SCREEN_HEIGHT * 0.4,
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
    position: "absolute",
    bottom: 150,
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
  const animatedValue = new Animated.Value(0);

  const spin = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "360deg"],
  });

  const spinAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      delay: 500,
      useNativeDriver: true,
    }).start();
  };

  spinAnimation();

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logo, { transform: [{ rotate: spin }] }]}>
        <Kork width={175} />
      </Animated.View>
      <Kort width={175} style={styles.kort} />
      <BackGroundSwirls style={styles.background} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ChoosePacket")}
      >
        <Text style={styles.text}>START</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartScreen;
