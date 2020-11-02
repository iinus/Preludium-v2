import React from "react";
import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
import UpperConfetti from "../../assets/UpperConfetti.svg";
import LowerConfetti from "../../assets/LowerConfetti.svg";

const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 80,
  },
  textBefore: {
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 45,
  },
  textAfter: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    top: 300,
    left: SCREEN_WIDTH * 0.25,
  },
  k: {
    position: "absolute",
    left: 10,
    top: 150,
    fontSize: 72,
    fontWeight: "900",
  },
  o: {
    position: "absolute",
    left: 55,
    top: 175,
    fontSize: 72,
    fontWeight: "900",
  },
  r: {
    position: "absolute",
    left: 98,
    top: 165,
    fontSize: 64,
    fontWeight: "900",
  },
  ka: {
    position: "absolute",
    left: 130,
    top: 180,
    fontSize: 72,
    fontWeight: "900",
  },
  lowerConfetti: {
    position: "absolute",
    top: 260,
    marginLeft: 45,
  },
  upperConfetti: {
    marginLeft: 20,
  },
});

const SpecialCard = () => {
  return (
    <View style={styles.textWrapper}>
      <UpperConfetti style={styles.upperConfetti} />
      <Text style={styles.textBefore}>Er du ikke</Text>
      <Text style={styles.k}>k</Text>
      <Text style={styles.o}>o</Text>
      <Text style={styles.r}>r</Text>
      <Text style={styles.ka}>ka?</Text>
      <LowerConfetti style={styles.lowerConfetti} />
      <Text style={styles.textAfter}>Alle skåler</Text>
    </View>
  );
};

export default SpecialCard;
