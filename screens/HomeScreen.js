import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({ 
  navigation 
}) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Welcome to Card Flipper!
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          testID={'playButton'}
          onPress={() => navigation.navigate('SetupGameScreen')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID={'scoresButton'}
          onPress={() => navigation.navigate('ScoreScreen')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>High Scores</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textContainer: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 1,
    backgroundColor: '#34a8eb',
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    fontSize: 20
  },
});
