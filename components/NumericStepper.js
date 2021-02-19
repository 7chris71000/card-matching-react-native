import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const NumericStepper = ({ 
  value,
  maxValue,
  minValue,
  stepDown = 1,
  stepUp = 1,
  onValueChange
}) => {
  return (
    <View style={styles.numericInputContainer}>
      <TouchableOpacity 
        style={{...styles.changeValueButton, ...styles.changeValueButtonMinus}}
        onPress={() => onValueChange(value - stepDown)}
        disabled={value == minValue}
      >
        <Text style={styles.changeValueText}>-</Text>
      </TouchableOpacity>

      <View style={styles.valueInput}>
        <Text style={styles.changeValueText}>{value}</Text>
      </View>
      
      <TouchableOpacity 
        style={{...styles.changeValueButton, ...styles.changeValueButtonPlus}}
        onPress={() => onValueChange(value + stepUp) }
        disabled={value == maxValue}
      >
        <Text style={styles.changeValueText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NumericStepper;

const styles = StyleSheet.create({
  numericInputContainer: {
    flexDirection: 'row',
  },
   valueInput: {
     width: 50,
     height: 50,

     justifyContent: 'center',
     alignItems: 'center',

     borderColor: '#cccccc',
     borderWidth: 1
   },
   changeValueButton: {
    width: 50,
    height: 50,
    
    justifyContent: 'center',
    alignItems: 'center',

    borderColor: '#cccccc',
    borderWidth: 1
   },
   changeValueButtonPlus: {
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
   },
   changeValueButtonMinus: {
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
   },
   changeValueText: {
    fontSize: 20
   },
})