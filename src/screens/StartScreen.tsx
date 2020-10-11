import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    color: "blue",
  },
  text: {
    color: "purple",
  },
  img: {
    width: 20,
    height: "auto",
  },
});

const StartScreen = ({ navigation }: NavigationStackProp) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Logo.svg")}
        style={styles.img}
      ></Image>
      <Text style={styles.text}>Preludium</Text>
      <Button
        color="purple"
        title="Start"
        onPress={() => navigation.navigate("ChoosePacket")}
      />
    </View>
  );
};

export default StartScreen;
