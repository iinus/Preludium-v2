import React from "react";
import { View } from "react-native";
import Swipe from "../components/Swipe";
import data from "../data/data";

const PlayScreen = () => {
  return (
    <View>
      <Swipe data={data}></Swipe>
    </View>
  );
};

export default PlayScreen;
