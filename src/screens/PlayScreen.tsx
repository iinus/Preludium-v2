import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Swipe from "../components/Swipe";
import data from "../data/data";

const styles = StyleSheet.create({
  container: {},
});

const PlayScreen = () => {
  return (
    <View style={styles.container}>
      <Swipe data={data}></Swipe>
    </View>
  );
};

export default PlayScreen;
