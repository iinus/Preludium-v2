import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  detailWrapper: {
    marginBottom: 10,
  },
  cardStyle: {
    height: "50%",
    width: "80%",
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 25,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  },
  cardType: {
    padding: 20,
    alignSelf: "center",
    fontSize: 24,
  },
  cardQuestion: {
    margin: 5,
    alignSelf: "center",
  },
});

interface ISwipeProps {
  data: any;
}

const Swipe = ({ data }: ISwipeProps) => {
  const renderCardItem = (card: any, index: number) => {
    return (
      <View key={index} style={styles.cardStyle}>
        <View style={styles.detailWrapper}>
          <Text style={styles.cardType}>{card.type}</Text>
          <Text style={styles.cardQuestion}>{card.question}</Text>
        </View>
      </View>
    );
  };

  const renderCards = (data: any) => {
    return data.map((Object: Object) => renderCardItem(Object, data.index));
  };

  return <View>{renderCards(data)}</View>;
};

export default Swipe;
