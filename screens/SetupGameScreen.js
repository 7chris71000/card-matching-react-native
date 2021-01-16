import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SetupGameScreen = ({ navigation, route }) => {

  const [matrix, setMatrix] = useState({columns: 4, rows: 4});
  const [difficulty, setDifficulty] = useState('medium');
  const [numberOfMatches, setNumberOfMatches] = useState(2);

  return (      
    <View style={styles.settingsContainer}>
      <Text>test</Text>
      <Button
        title="Play"
        onPress={() => 
          navigation.navigate('GameScreen', { ...matrix, difficulty, numberOfMatches })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SetupGameScreen;

/*
* options in this screen
* - matrix size (rows and columns)
* - difficulty (easy, medium, hard)
* - number of unique colours
*/