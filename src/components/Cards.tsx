import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  Animated,
  Dimensions,
  Platform,
} from "react-native";
import { shuffleCards } from "../utils/shuffleCards";
import { ICard } from "../types/Card";
import SwipeExplaination from "./SwipeExplaination";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SWIPE_RIGHT_THRESHOLD = 0.3 * SCREEN_WIDTH;
const SWIPE_LEFT_THRESHOLD = -0.3 * SCREEN_WIDTH;
const SWIPE_UP_THRESHOLD = 0.01 * SCREEN_HEIGHT;
const SWIPE_DOWN_THRESHOLD = -0.01 * SCREEN_HEIGHT;
const SWIPE_OUT_DURATION = 300;

const styles = StyleSheet.create({
  textWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  cardStyle: {
    position: "absolute",
    height: SCREEN_HEIGHT * 0.55,
    width: SCREEN_WIDTH * 0.82,
    marginLeft: SCREEN_WIDTH * 0.1,
    marginTop: SCREEN_HEIGHT * 0.1,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 25,
    backgroundColor: "#F7F4EC",
  },
  cardBehindStyle: {
    position: "absolute",
    height: SCREEN_HEIGHT * 0.55,
    width: SCREEN_WIDTH * 0.72,
    marginLeft: SCREEN_WIDTH * 0.14,
    marginTop: SCREEN_HEIGHT * 0.085,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 25,
    backgroundColor: "#F7F4EC",
  },
  cardBehindBehindStyle: {
    position: "absolute",
    height: SCREEN_HEIGHT * 0.55,
    width: SCREEN_WIDTH * 0.62,
    marginLeft: SCREEN_WIDTH * 0.19,
    marginTop: SCREEN_HEIGHT * 0.07,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 25,
    backgroundColor: "#F7F4EC",
  },
  cardType: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: SCREEN_HEIGHT * 0.15,
    marginTop: 44,
    marginHorizontal: 10,
    ...Platform.select({
      ios: { fontFamily: "Courier" },
      android: { fontFamily: "monospace" },
    }),
  },
  cardQuestion: {
    alignSelf: "center",
    width: SCREEN_WIDTH * 0.6,
    textAlign: "center",
    ...Platform.select({
      ios: { fontFamily: "System" },
      android: { fontFamily: "Roboto" },
    }),
    fontSize: 18,
    lineHeight: 21,
  },
});

interface ICardsProps {
  data: ICard[];
}

const Cards = ({ data }: ICardsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const position = useRef(new Animated.ValueXY()).current;
  const cards = shuffleCards(data);

  const _panResponder = PanResponder.create({
    // Ask to be the responder:
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: position.x, // x,y are Animated.Value
          dy: position.y,
        },
      ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: (e, gesture) => {
      // The user has released all touches while this view is the
      // responder. This typically means a gesture has succeeded
      if (
        Math.abs(gesture.dx) > SWIPE_RIGHT_THRESHOLD ||
        Math.abs(gesture.dx) > SWIPE_UP_THRESHOLD
      ) {
        forceSwipe("right");
      } else if (
        Math.abs(gesture.dy) < SWIPE_LEFT_THRESHOLD ||
        Math.abs(gesture.dy) < SWIPE_DOWN_THRESHOLD
      ) {
        forceSwipe("left");
      } else {
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const getCardStyle = (position: Animated.ValueXY) => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ["-120deg", "0deg", "120deg"],
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    };
  };

  const forceSwipe = (direction: string) => {
    const x = direction === "right" ? SCREEN_WIDTH * 1.1 : -SCREEN_WIDTH;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION,
      useNativeDriver: false,
    }).start(() => onSwipeComplete());
  };

  const onSwipeComplete = () => {
    setCurrentIndex(currentIndex + 1);
    position.setValue({ x: 0, y: 0 });
  };

  return (
    <>
      {cards
        .map((card) => {
          const index = cards.indexOf(card);
          if (index < currentIndex) {
            return <View></View>;
          }
          return index === currentIndex ? (
            <View key={index}>
              <Animated.View
                {..._panResponder.panHandlers}
                style={[getCardStyle(position), styles.cardStyle]}
              >
                <View style={styles.textWrapper}>
                  <Text style={styles.cardType}>{card.type.toUpperCase()}</Text>
                  <Text style={styles.cardQuestion}>{card.question}</Text>
                  {index === 0 && <SwipeExplaination />}
                </View>
              </Animated.View>
            </View>
          ) : (
            <View key={index}>
              <View style={styles.cardBehindBehindStyle}></View>
              <View style={styles.cardBehindStyle}>
                <View style={styles.textWrapper}>
                  <Text style={styles.cardType}>{card.type.toUpperCase()}</Text>
                  <Text style={styles.cardQuestion}>{card.question}</Text>
                </View>
              </View>
            </View>
          );
        })
        .reverse()}
    </>
  );
};

export default Cards;
