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

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SWIPE_RIGHT_THRESHOLD = 0.4 * SCREEN_WIDTH;
const SWIPE_LEFT_THRESHOLD = -0.4 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 300;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#03444E",
    width: "100%",
    height: "100%",
  },
  textWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  cardStyle: {
    position: "absolute",
    height: SCREEN_HEIGHT * 0.6,
    width: SCREEN_WIDTH * 0.75,
    marginLeft: SCREEN_WIDTH * 0.125,
    marginTop: SCREEN_HEIGHT * 0.2,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 25,
    backgroundColor: "#F7F4EC",
  },
  cardBehindStyle: {
    position: "absolute",
    height: SCREEN_HEIGHT * 0.6,
    width: SCREEN_WIDTH * 0.7,
    marginLeft: SCREEN_WIDTH * 0.15,
    marginTop: SCREEN_HEIGHT * 0.18,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 25,
    backgroundColor: "#F7F4EC",
  },
  cardType: {
    alignSelf: "center",
    fontSize: 16,
    textAlign: "center",
    marginBottom: SCREEN_HEIGHT * 0.15,
    marginTop: 44,
    marginHorizontal: 10,
    ...Platform.select({
      ios: { fontFamily: "Courier" },
      android: { fontFamily: "Space Mono" },
    }),
    fontWeight: "bold",
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

interface ISwipeProps {
  data: any;
}

const Swipe = ({ data }: ISwipeProps) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const position = useRef(new Animated.ValueXY()).current;
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
      if (Math.abs(gesture.dx) > SWIPE_RIGHT_THRESHOLD) {
        forceSwipe("right");
      } else if (Math.abs(gesture.dy) < SWIPE_LEFT_THRESHOLD) {
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

  const cardItem = (card: any) => {
    if (card.index < currentIndex) {
      return null;
    }
    return card.index === currentIndex ? (
      <Animated.View
        key={card.index}
        {..._panResponder.panHandlers}
        style={[getCardStyle(position), styles.cardStyle]}
      >
        <View style={styles.textWrapper}>
          <Text style={styles.cardType}>{card.type}</Text>
          <Text style={styles.cardQuestion}>{card.question}</Text>
        </View>
      </Animated.View>
    ) : (
      <Animated.View key={card.index} style={styles.cardBehindStyle}>
        <View style={styles.textWrapper}>
          <Text style={styles.cardType}>{card.type}</Text>
          <Text style={styles.cardQuestion}>{card.question}</Text>
        </View>
      </Animated.View>
    );
  };

  const cardsToCardItem = (data: any) => {
    let cards = data.map((Object: Object) => cardItem(Object));
    cards = Platform.OS === "android" ? cards : cards.reverse();
    return cards;
  };

  return <View style={styles.background}>{cardsToCardItem(data)}</View>;
};

export default Swipe;
