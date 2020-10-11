import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import Swipe from "../components/Swipe";
import data from "../data/data";

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
});

const PlayScreen = () => {
  return (
    <View style={styles.container}>
      <Swipe data={data}></Swipe>
    </View>
  );
};

export default PlayScreen;
