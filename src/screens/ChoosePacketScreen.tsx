import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { ActiveButton } from "../components/ActiveButton";
import { InactiveButton } from "../components/InactiveButton";
import BackGroundSwirls from "../assets/BackgroundSwirls.svg";
import TopBar from "../components/TopBar";

//
import BackIcon from "../assets/backIcon.svg";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({

  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#03444E",
  },

  buttonWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",


  },
  text: {
    color: "white",
    paddingBottom: 24,
    fontSize: 14,
    ...Platform.select({
      ios: { fontFamily: "Courier" },
      android: { fontFamily: "monospace" },
    }),
    fontWeight: "700",
  },
  background: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },

});



const ChoosePacketScreen = ({ navigation }: NavigationStackProp) => {
  return (
<View style={styles.container}> 

  <TopBar/>

    <View style={styles.buttonWrapper}>
    
    <BackGroundSwirls style={styles.background} />

      <Text style={styles.text}>Velg pakke</Text>
      <ActiveButton
        text="NTNU"
        textLine="Student i Trondheim"
        height={106}
        onPress={() => navigation.navigate("PlayScreen")}
      />
      <InactiveButton text="UiO" textLine="kommer" />
      <InactiveButton text="BI" textLine="kommer" />
    </View>

</View>
  );
};

export default ChoosePacketScreen;
