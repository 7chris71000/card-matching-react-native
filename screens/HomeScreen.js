import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ 
  navigation 
}) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.textContainer}>
      <Text style={styles.title}>
          Welcome to Card Flipper!
        </Text>
        <Text>
          Press Play to start.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Play" 
          onPress={() => 
            navigation.navigate('SetupGameScreen')
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  title: {
    fontSize: 30
  },
  
  buttonContainer: {
    flex: 1,
    backgroundColor: '#fff',
    top: 0,
  },
});

export default HomeScreen;