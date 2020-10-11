import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
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
});

const PlayScreen = ({ navigation }: NavigationStackProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Preludium play</Text>
    </View>
  );
};

export default PlayScreen;
