import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Platform,
  ScrollView,
} from "react-native";

const styles = StyleSheet.create({
  wrapper: {},
  heading: {
    fontSize: 24,
    ...Platform.select({
      ios: { fontFamily: "Courier" },
      android: { fontFamily: "Space Mono" },
    }),
    fontWeight: "bold",
  },
  titles: {
    fontSize: 16,
    ...Platform.select({
      ios: { fontFamily: "Courier" },
      android: { fontFamily: "Space Mono" },
    }),
    fontWeight: "bold",
  },
});

const Rules = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <Text style={styles.heading}>Regler</Text>
      <Text style={styles.titles}>Pekeleken</Text>
    </ScrollView>
  );
};

export default Rules;
