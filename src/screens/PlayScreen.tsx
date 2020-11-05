import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Swipe from "../components/Swipe";
import data from "../data/data";
import BackGroundSwirls from "../assets/BackgroundSwirls.svg";
import TopBar from "../components/TopBar";
import { NavigationStackProp } from "react-navigation-stack";


const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
  },
  playscreen: {
    backgroundColor: "#03444E",
    width: "100%",
    height: "100%",
  },
  help: {
  zIndex: 10,
  },
  topWrapper: {
    display: "flex",
    flexDirection: "row",
   },
});

const PlayScreen = ({ navigation }: NavigationStackProp) => {
  const [showHelp, setShowHelp] = useState(false);

  const onPressHelpButton = () => {
    setShowHelp(!showHelp);
  };

  return (
    <View style={styles.playscreen}>

      <TopBar navigation={navigation}/>

      <View style={styles.topWrapper}>
     
      </View>
      
      {!showHelp && <BackGroundSwirls style={styles.background} />}
      {!showHelp && <Swipe data={data}></Swipe>}
    </View>
  );
};

export default PlayScreen;
