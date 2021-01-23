import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GameTile from "./GameTile";

const GameBoard = ({
  gameMatrix,
  onTilePressed,
  difficulty
}) => {

  return (
    <View style={styles.boardContainer}>
      { gameMatrix.map((column, i) => {
        return (
          <View style={styles.matrixRow} key={i}>
            {
              column.map((tile, j) => {
                const { rowNumber, columnNumber, value, selected, locked } = tile;
                return (
                  <GameTile 
                    key={column.length * i + j} 
                    rowNumber={rowNumber}
                    columnNumber={columnNumber}
                    value={value}
                    selected={selected}
                    locked={locked}
                    onTilePressed={onTilePressed} 
                    totalColumns={column.length}
                    difficulty={difficulty}
                  />
                )
              })
            }
          </View>
        )
      })}
    </View>
  );
}

export default GameBoard;

const styles = StyleSheet.create({
  boardContainer: {
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  matrixRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 3,
    backgroundColor: 'white',
    
  },
})