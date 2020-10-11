import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import StartScreen from "./src/screens/StartScreen";
import ChoosePacketScreen from "./src/screens/ChoosePacketScreen";
import PlayScreen from "./src/screens/PlayScreen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="ChoosePacket" component={ChoosePacketScreen} />
        <Stack.Screen name="PlayScreen" component={PlayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
