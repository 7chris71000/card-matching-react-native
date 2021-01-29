import React, { useState,useEffect } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const FlippableCard = () => {

  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));
  const [frontInterpolate, setFrontInterpolate] = useState();
  const [backInterpolate, setBackInterpolate] = useState();
  const [flipValue, setFlipValue] = useState(0);

  useEffect(() => {

    animatedValue.addListener(({ value }) => {
      setFlipValue(value)
    })

    setFrontInterpolate(
      animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg']
      })
    )
    setBackInterpolate(
      animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg']
      })
    )
  }, []);


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
    <View style={styles.container}>
      <Animated.View style={[styles.flipCard, styles.flipCardFront, frontAnimatedStyle]}/>
      <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}>
        <TouchableWithoutFeedback style={[styles.testStyle]} onPress={flipCard}>
          <Text>TEST</Text>
        </TouchableWithoutFeedback>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flipCard: {
    width: 100,
    height: 100,
    backfaceVisibility: 'hidden'
  },
  flipCardFront: {
    backgroundColor: '#86fca5',
  },
  flipCardBack: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#8ca7ff',
  },
  testStyle: {
    width: 100,
    height: 100,
  }
});

export default FlippableCard;
