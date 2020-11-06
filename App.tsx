import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import StartScreen from "./src/screens/StartScreen";
import ChoosePacketScreen from "./src/screens/ChoosePacketScreen";
import PlayScreen from "./src/screens/PlayScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="ChoosePacket" component={ChoosePacketScreen} />
        <Stack.Screen
          name="PlayScreen"
          component={PlayScreen}
          //options={{ headerLeft }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
