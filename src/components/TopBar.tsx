import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Modal, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import BackIcon from "../assets/backIcon.svg";
import Logo from "../assets/korkSmall.svg";
import Help from "../assets/Help.svg";
import Rules from "../components/Rules";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  topWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: SCREEN_HEIGHT * 0.08,
    marginBottom: SCREEN_HEIGHT * 0.04,
  },
  back: {
    marginLeft: SCREEN_WIDTH * 0.05,
  },
  help: {
    marginRight: SCREEN_WIDTH * 0.05,
  },
  rules: {
    justifyContent: "center",
    alignItems: "center",
  },
});

const TopBar = ({ navigation }: NavigationStackProp) => {
  const [showHelp, setShowHelp] = useState(false);

  const onPressBackIcon = () => {
    navigation.goBack();
  };

  const onPressHelpButton = () => {
    setShowHelp(!showHelp);
  };

  return (
    <View>
      <View style={styles.topWrapper}>
        <TouchableOpacity onPress={() => onPressBackIcon()}>
          <BackIcon width={24} height={24} style={styles.back} />
        </TouchableOpacity>
        <Logo width={168} />
        <TouchableOpacity onPress={() => onPressHelpButton()}>
          <Help width={24} height={24} style={styles.help} />
        </TouchableOpacity>
      </View>
      <Modal visible={showHelp} animationType={"slide"}>
        <View>
          <Rules onPress={() => onPressHelpButton()} />
        </View>
      </Modal>
    </View>
  );
};

export default TopBar;
