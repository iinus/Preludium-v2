import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { ActiveButton } from "../components/ActiveButton";
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
      android: { fontFamily: "Space Mono" },
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
        onPress={() => navigation.navigate("PlayScreen")}
      />
      <ActiveButton
        text="UiO"
        textLine="kommer"
        onPress={() => console.log("I should be an inactive button")}
      />
      <ActiveButton
        text="BI"
        textLine="kommer"
        onPress={() => console.log("I should be an inactive button")}
      />
    </View>
  );
};

export default ChoosePacketScreen;
