import React, { useRef } from "react";
import { View, Text, StyleSheet, PanResponder, Animated } from "react-native";

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
  const position = useRef(new Animated.ValueXY()).current;
  const _panResponder = PanResponder.create({
    // Ask to be the responder:
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: position.x, // x,y are Animated.Value
        dy: position.y,
      },
    ]),
    onPanResponderRelease: () => {
      // The user has released all touches while this view is the
      // responder. This typically means a gesture has succeeded
    },
  });

  const renderCardItem = (card: any, index: number) => {
    return (
      <Animated.View
        key={index}
        {..._panResponder.panHandlers}
        style={[position.getLayout(), styles.cardStyle]}
      >
        <View style={styles.detailWrapper}>
          <Text style={styles.cardType}>{card.type}</Text>
          <Text style={styles.cardQuestion}>{card.question}</Text>
        </View>
      </Animated.View>
    );
  };

  const renderCards = (data: any) => {
    return data.map((Object: Object) => renderCardItem(Object, data.index));
  };

  return <View>{renderCards(data)}</View>;
};

export default Swipe;
