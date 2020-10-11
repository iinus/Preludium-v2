import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { Button } from "../components/Button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "purple",
  },
  img: {
    height: 45,
    width: 240,
  },
});

const StartScreen = ({ navigation }: NavigationStackProp) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Preludium-logo.png")}
        style={styles.img}
      ></Image>
      <Button
        text="Start"
        onPress={() => navigation.navigate("ChoosePacket")}
      />
    </View>
  );
};

export default StartScreen;
