import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NumericInput from 'react-native-numeric-input';
import { Picker } from '@react-native-picker/picker';
import { Icon } from 'react-native-elements';

const SetupGameScreen = ({ navigation, route }) => {

  const [matrix, setMatrix] = useState({columns: 4, rows: 4});
  const [difficulty, setDifficulty] = useState('Medium');
  const [numberOfMatches, setNumberOfMatches] = useState(2);

  const updateMatrix = (value, type) => {
    if(type == 'columns') {
      setMatrix({columns: value, rows: matrix['rows']})
    } else if (type == 'rows') {
      setMatrix({columns: matrix['columns'], rows: value})
    }
  }

  return (
    <View style={styles.settingsContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Game Setup</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Columns</Text>
        <NumericInput 
          value={matrix['columns']}
          onChange={value => updateMatrix(value, 'columns')}
        />

        <Text style={styles.inputLabel}>Rows</Text>
        <NumericInput
          value={matrix['rows']}
          onChange={value => updateMatrix(value, 'rows')}
        />

        <Picker
          selectedValue={difficulty}
          style={styles.difficultyPicker}
          onValueChange={ itemValue => setDifficulty(itemValue) }
        >
          <Picker.Item label="Easy" value="Easy" />
          <Picker.Item label="Medium" value="Medium" />
          <Picker.Item label="Hard" value="Hard" />
        </Picker>

      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => 
            navigation.navigate('GameScreen', { ...matrix, difficulty, numberOfMatches })
          }
          style={styles.playButton}
        >
          <Text style={styles.playButtonText}>
            Play
          </Text>
          <Icon 
            name={'ios-chevron-forward-circle-outline'}
            type={'ionicon'}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  },
  
  inputLabel: {
    fontSize: 25,
    marginTop: 15,
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
    flexDirection: 'row'
  },
  playButtonText: {
    fontSize: 20,
    marginRight: 5,
    marginLeft: 15
  },
  
  difficultyPicker: {
    width: 150,
  },

  settingsContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  inputContainer: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: '#fff',
    top: 0,
    alignItems: 'center',
  },
});

export default SetupGameScreen;

/*
* options in this screen
* - matrix size (rows and columns)
* - difficulty (easy, medium, hard)
* - number of unique colours
*/