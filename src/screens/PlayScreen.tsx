import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Cards from "../components/Cards";
import general from "../data/general";
import BackGroundSwirls from "../assets/BackgroundSwirls.svg";
import TopBar from "../components/TopBar";
import { NavigationStackProp } from "react-navigation-stack";
import ntnu from "../data/ntnu";

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

  if (packet === "NTNU") {
    cards = cards.concat(ntnu);
  }

  return (
    <View style={styles.playscreen}>
      <TopBar navigation={navigation} />
      <BackGroundSwirls style={styles.background}></BackGroundSwirls>
      <Cards data={general} />
    </View>
  );
};

export default PlayScreen;
