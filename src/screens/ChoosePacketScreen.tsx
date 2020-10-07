import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

const ChoosePacketScreen = ({ navigation }: NavigationStackProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Preludium</Text>
      <Button
        color="purple"
        title="Start"
        onPress={() => navigation.navigate("PlayScreen")}
      />
      <Button
        color="purple"
        title="Start"
        onPress={() => console.log("hello")}
      />
      <Button
        color="purple"
        title="Start"
        onPress={() => console.log("hello")}
      />
    </View>
  );
};

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

export default ChoosePacketScreen;
