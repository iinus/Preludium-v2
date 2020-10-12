import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { ActiveButton } from "../components/ActiveButton";

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
    padding: 10,
    ...Platform.select({
      ios: { fontFamily: "Courier" },
      android: { fontFamily: "Space Mono" },
    }),
    fontWeight: "bold",
  },
});

const ChoosePacketScreen = ({ navigation }: NavigationStackProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Velg pakke</Text>
      <ActiveButton
        text="NTNU"
        onPress={() => navigation.navigate("PlayScreen")}
      />
      <ActiveButton
        text="UiO"
        onPress={() => console.log("I should be an inactive button")}
      />
      <ActiveButton
        text="BI"
        onPress={() => console.log("I should be an inactive button")}
      />
    </View>
  );
};

export default ChoosePacketScreen;
