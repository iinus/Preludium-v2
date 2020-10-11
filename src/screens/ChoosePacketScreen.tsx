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

const ChoosePacketScreen = ({ navigation }: NavigationStackProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choose packet</Text>
      <Button
        color="purple"
        title="NTNU"
        onPress={() => navigation.navigate("PlayScreen")}
      />
      <Button color="purple" title="UiO" onPress={() => console.log("hello")} />
      <Button color="purple" title="BI" onPress={() => console.log("hello")} />
    </View>
  );
};

export default ChoosePacketScreen;
