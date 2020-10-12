import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { Button } from "../components/Button";

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
      <Button text="NTNU" onPress={() => navigation.navigate("PlayScreen")} />
      <Button text="UiO" onPress={() => console.log("hello")} />
      <Button text="BI" onPress={() => console.log("hello")} />
    </View>
  );
};

export default ChoosePacketScreen;
