import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

const styles = StyleSheet.create({
  detailWrapper: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginBottom: 10,
  },
});

interface ISwipeProps {
  data: any;
}

const Swipe = ({ data }: ISwipeProps) => {
  const renderCardItem = (card: any, index: number) => {
    console.log(card.type);
    return (
      <View style={{ height: 200, width: 200 }}>
        <Card key={index}>
          <View style={styles.detailWrapper}>
            <Text>{card.type}</Text>
            <Text>{card.question}</Text>
          </View>
        </Card>
      </View>
    );
  };

  const renderCards = (data: any) => {
    console.log(data);
    return data.map((Object: Object) => renderCardItem(Object, data.index));
  };

  return <View>{renderCards(data)}</View>;
};

export default Swipe;
