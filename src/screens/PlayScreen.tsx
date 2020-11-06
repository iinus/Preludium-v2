import React from "react";
import { View, StyleSheet } from "react-native";
import Cards from "../components/Cards/Cards";
import general from "../data/general";
import BackGroundSwirls from "../assets/BackgroundSwirls.svg";
import TopBar from "../components/TopBar";
import { NavigationStackProp } from "react-navigation-stack";
import ntnu from "../data/ntnu";
import specialCards from "../data/specialCards";

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
});

interface IPlayScreenProps {
  navigation: NavigationStackProp;
  packet: string;
}

const PlayScreen = ({ navigation, packet }: IPlayScreenProps) => {
  let cards = general;
  cards = cards.concat(specialCards);

  if (packet === "NTNU") {
    cards = cards.concat(ntnu);
  }

  return (
    <View style={styles.playscreen}>
      <TopBar navigation={navigation} />
      <BackGroundSwirls style={styles.background}></BackGroundSwirls>
      <Cards data={cards} />
    </View>
  );
};

export default PlayScreen;
