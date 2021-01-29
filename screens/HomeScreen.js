import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FlippableCard from '../components/FlippableCard';

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
        <FlippableCard/>
        <TouchableOpacity
            onPress={() => 
              navigation.navigate('SetupGameScreen')
            }
            style={styles.playButton}>
          <Text style={styles.playButtonText}>Play</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  playButton: {
    height: 50,
    width: 150,
    
    alignItems: 'center',
    justifyContent: 'center',
    
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 1,
    backgroundColor: '#34a8eb',
    borderRadius: 5,
  },
  playButtonText: {
    fontSize: 20
  },
});

export default HomeScreen;