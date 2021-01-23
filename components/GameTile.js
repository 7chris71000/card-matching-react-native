import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const GameTile = ({
  rowNumber,
  columnNumber,
  value,
  selected,
  locked,
  onTilePressed,
  totalColumns,
  difficulty
}) => {
  return (
    <TouchableOpacity 
      style={
        [ styles.matrixColumn, 
          locked ? styles.locked : (selected ? styles.selected : styles.notSelected), 
          {
            height: 300 / totalColumns,
            width: 300 / totalColumns,
            borderRadius: '10%',
          }
        ]}
      onPress={() => { onTilePressed( {
        rowNumber: rowNumber,
        columnNumber: columnNumber,
        value: value,
        selected: selected,
        locked: locked,
        onTilePressed: onTilePressed }) 
      }}
      key={value}
      disabled={locked || selected}
    >
      <Text style={{
            fontSize: 125 / totalColumns
            }}
      >
        {/* remove true when you want to hide numbers */}
        { (difficulty == 'Easy' || selected || locked) && value } 
      </Text>
    </TouchableOpacity>
  );
}

export default GameTile;

const styles = StyleSheet.create({
  matrixColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  selected: {
    backgroundColor: 'green',
  },
  notSelected: {
    backgroundColor: 'grey',
  },
  locked: {
    backgroundColor: 'yellow',
  }
})