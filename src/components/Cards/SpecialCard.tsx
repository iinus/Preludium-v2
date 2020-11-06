import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import UpperConfetti from "../../assets/UpperConfetti.svg";
import LowerConfetti from "../../assets/LowerConfetti.svg";
import Korka from "../../assets/korka.svg";

const SCREEN_HEIGHT = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 60,
    alignItems: "center",
  },
  textLeft: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingLeft: 20,
  },
  textCenter: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

const SpecialCard = (props: { specialCardQuestion: string }) => {
  return (
    <View>
      {props.specialCardQuestion === "alle" ? (
        <View style={styles.textWrapper}>
          <UpperConfetti />
          <Text style={styles.textLeft}>Er du ikke</Text>
          <Korka />
          <LowerConfetti />
          <Text style={styles.textCenter}>alle skåler</Text>
        </View>
      ) : (
        <View
          style={[styles.textWrapper, { paddingTop: SCREEN_HEIGHT * 0.15 }]}
        >
          <UpperConfetti />
          <Text style={styles.textCenter}>Vi tar en skål for</Text>
          <Text style={styles.textCenter}>{props.specialCardQuestion}</Text>
          <LowerConfetti />
        </View>
      )}
    </View>
  );
};

export default SpecialCard;
