import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Icon } from 'react-native-elements';
import NumericStepper from '../components/NumericStepper';

const SetupGameScreen = ({ navigation, route }) => {

  const [matrix, setMatrix] = useState({columns: 3, rows: 3});
  const [mode, setMode] = useState('Normal');
  const [numberOfMatches, setNumberOfMatches] = useState(1);
  const [factors, setFactors] = useState([]);
  const [nextStep, setNextStep] = useState(1);
  const [prevStep, setPrevStep] = useState();
  
  useEffect(() => {
    setupFactors();
    setNumberOfMatches(1);
  }, [matrix]);

  const setupFactors = () => {
    const { columns, rows } = matrix;
    const totalCards = columns * rows;

    const factorsValues = Array
    .from(Array(totalCards + 1), (_, i) => i)
    .filter(i => totalCards % i === 0)

    const factorsArray = factorsValues.map((value, index) => {
      let nextStep = 0;
      let prevStep = 0;
      
      if(index !== factorsValues.length - 1) nextStep = factorsValues[index + 1] - factorsValues[index];
      if(index !== 0) prevStep = factorsValues[index] - factorsValues[index - 1];

      return {
        value,
        nextStep,
        prevStep
      }
    })

    setNextStep(factorsArray[0].nextStep)
    setPrevStep(factorsArray[0].prevStep)
    setFactors(factorsArray);
  }

  const updateSteps = (newValue) => {
    const index = factors.findIndex(object => object.value == newValue);
    if(index !== undefined) {
      setNextStep(factors[index].nextStep)
      setPrevStep(factors[index].prevStep)
    }
  }

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
        <NumericStepper
          value={matrix['columns']}
          maxValue={20}
          minValue={1}
          onValueChange={value => updateMatrix(value, 'columns')}
        />

        <Text style={styles.inputLabel}>Rows</Text>
        <NumericStepper
          value={matrix['rows']}
          maxValue={20}
          minValue={1}
          onValueChange={value => updateMatrix(value, 'rows')}
        />

        <Text style={styles.inputLabel}>Number of Matches</Text>
        
        <NumericStepper
          value={numberOfMatches}
          maxValue={factors[factors.length - 1] && factors[factors.length - 1].value}
          minValue={1}
          stepUp={nextStep}
          stepDown={prevStep}
          onValueChange={value => {
            updateSteps(value);
            setNumberOfMatches(value);
          }}
        />

        <Picker
          selectedValue={mode}
          style={styles.modePicker}
          onValueChange={ itemValue => setMode(itemValue) }
        >
          <Picker.Item label='Normal' value='Normal' />
          <Picker.Item label='Dev' value='Dev' />
        </Picker>

      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          testID='playButton'
          onPress={() => navigation.navigate('GameScreen', { ...matrix, mode, numberOfMatches }) }
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
  
  modePicker: {
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
