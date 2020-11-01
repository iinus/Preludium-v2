import React, {useState} from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity, Text, Platform } from "react-native";
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
        alignContent: "center",
        justifyContent: "space-around",
        marginLeft: SCREEN_WIDTH * 0,
        marginTop: SCREEN_HEIGHT * 0.08,
        marginBottom: SCREEN_HEIGHT *0.04
      },

      back: {
        marginTop: 40,
      },

      logo: {
          margin: 10,

      },
      help: {
        marginTop: 40,
      }

});


const TopBar = ({navigation, isShopHelpIncluded} : NavigationStackProp ) => {
    const [showHelp, setShowHelp] = useState(false);


    const onPressBackIcon = () => {
  
    }

    const onPressHelpButton = ( ) => {
        setShowHelp(!showHelp);
      };



    return (
        <View style={styles.topWrapper}>
            <TouchableOpacity onPress={() => onPressBackIcon()}>
                <BackIcon width={24} height={24} style={styles.back} />
            </TouchableOpacity>
            
            <Logo width={168} style={styles.logo}/>

            {isShopHelpIncluded && (

            <TouchableOpacity onPress={() => onPressHelpButton()}>
                <Help width={24} height={24} style={styles.help} />
            </TouchableOpacity>

            )}

            {showHelp && isShopHelpIncluded && <Rules/>}

            
        
        </View>

    )
};



export default TopBar;