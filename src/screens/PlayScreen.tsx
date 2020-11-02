import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Cards from "../components/Cards/Cards";
import general from "../data/general";
import BackGroundSwirls from "../assets/BackgroundSwirls.svg";
import Logo from "../assets/korkSmall.svg";
import Help from "../assets/Help.svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import Rules from "../components/Rules";
import ntnu from "../data/ntnu";
import specialCards from "../data/specialCards";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
  },
  playscreen: {
    backgroundColor: "#03444E",
    width: "100%",
    height: "100%",
  },
  help: {
    marginTop: 40,
  },
  topWrapper: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around",
    marginLeft: SCREEN_WIDTH * 0.21,
    marginTop: SCREEN_HEIGHT * 0.08,
    marginBottom: SCREEN_HEIGHT * 0.04,
  },
});

const PlayScreen = (packet: string) => {
  const [showHelp, setShowHelp] = useState(false);
  let cards = general;
  cards = cards.concat(specialCards);

  const onPressHelpButton = () => {
    setShowHelp(!showHelp);
  };

  if (packet === "NTNU") {
    cards = cards.concat(ntnu);
  }

  return (
    <View style={styles.playscreen}>
      <View style={styles.topWrapper}>
        <Logo width={168} />
        <TouchableOpacity onPress={() => onPressHelpButton()}>
          <Help width={24} height={24} style={styles.help} />
        </TouchableOpacity>
      </View>
      {!showHelp && <BackGroundSwirls style={styles.background} />}
      {showHelp ? <Rules /> : <Cards data={general} />}
    </View>
  );
};

export default PlayScreen;
