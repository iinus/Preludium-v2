import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { ActiveButton } from "../components/ActiveButton";
import { InactiveButton } from "../components/InactiveButton";
import BackGroundSwirls from "../assets/BackgroundSwirls.svg";

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
    color: "white",
    paddingBottom: 24,
    fontSize: 14,
    ...Platform.select({
      ios: { fontFamily: "Courier" },
      android: { fontFamily: "monospace" },
    }),
    fontWeight: "700",
  },
  background: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
});

const ChoosePacketScreen = ({ navigation }: NavigationStackProp) => {
  return (
    <View style={styles.container}>
      <BackGroundSwirls style={styles.background} />
      <Text style={styles.text}>Velg pakke</Text>
      <ActiveButton
        text="NTNU"
        textLine="Student i Trondheim"
        height={106}
        onPress={() => navigation.navigate("PlayScreen", { packet: "NTNU" })}
      />
      <ActiveButton
        text="Generell"
        textLine="For alle"
        height={106}
        onPress={() => navigation.navigate("PlayScreen", { packet: "General" })}
      />
      <InactiveButton text="UiO" textLine="kommer" />
      <InactiveButton text="BI" textLine="kommer" />
    </View>
  );
};

export default ChoosePacketScreen;
