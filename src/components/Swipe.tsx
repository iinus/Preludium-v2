import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  Animated,
  Dimensions,
} from "react-native";

const styles = StyleSheet.create({
  detailWrapper: {
    marginBottom: 10,
  },
  cardStyle: {
    height: 400,
    width: 300,
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

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_RIGHT_THRESHOLD = 0.5 * SCREEN_WIDTH;
const SWIPE_LEFT_THRESHOLD = -0.5 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

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
    position.setValue({ x: 0, y: 0 });
    setCurrentIndex(currentIndex + 1);
  };

  const cardItem = (card: any) => {
    return card.index === currentIndex ? (
      <Animated.View
        key={card.index}
        {..._panResponder.panHandlers}
        style={[getCardStyle(position), styles.cardStyle]}
      >
        <View style={styles.detailWrapper}>
          <Text style={styles.cardType}>{card.type}</Text>
          <Text style={styles.cardQuestion}>{card.question}</Text>
        </View>
      </Animated.View>
    ) : (
      <View />
    );
  };

  const cardsToCardItem = (data: any) => {
    return data.map((Object: Object) => cardItem(Object));
  };

  return <View>{cardsToCardItem(data)}</View>;
};

export default Swipe;
