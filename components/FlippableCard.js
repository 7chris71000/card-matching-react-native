import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const FlippableCard = ({
  value,
  onTilePressed,
  totalColumns,
  cardStyle,
  flipped,
  mode
}) => {

  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));
  const [frontInterpolate, setFrontInterpolate] = useState("0deg");
  const [backInterpolate, setBackInterpolate] = useState("0deg");
  const [flipValue, setFlipValue] = useState(0);

  useEffect(() => {
    animatedValue.addListener(({ value }) => {
      setFlipValue(value)
    })

    setBackInterpolate(
      animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg']
      })
    )
    setFrontInterpolate(
      animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg']
      })
    )
  }, []);

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    flipCard()
  }, [flipped]);

  const flipCard = () => {
    if( flipValue <= 90 ){
      Animated.timing(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true
      }).start();
    }
  }

  const frontAnimatedStyle = {
    transform: [
      { rotateX: frontInterpolate }
    ]
  }

  const backAnimatedStyle = {
    transform: [
      { rotateX: backInterpolate }
    ]
  }

  return(
    <View>
      <Animated.View style={[cardStyle, styles.flipCardBackVisibility, styles.flipCardBack, backAnimatedStyle]}>
        { mode === 'Dev' && <Text style={{fontSize: 125 / totalColumns }}>{value}</Text> }
      </Animated.View>
      <Animated.View style={[cardStyle, styles.flipCardBackVisibility, styles.flipCardFront, frontAnimatedStyle]}>
        <TouchableOpacity
          testID={'flipCardId'}
          style={[cardStyle]}
          onPress={() => onTilePressed()}
          disabled={flipped}
          activeOpacity={1.0}
        >
          <Text style={{fontSize: 125 / totalColumns }}>{value}</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  flipCardBackVisibility: {
    backfaceVisibility: 'hidden'
  },
  flipCardBack: {
    backgroundColor: 'gray',
  },
  flipCardFront: {
    position: 'absolute',
    backgroundColor: '#34a8eb',
  }
});

export default FlippableCard;
