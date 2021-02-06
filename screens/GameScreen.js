import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GameBoard from '../components/GameBoard';
import ConfettiCannon from 'react-native-confetti-cannon';

const GameScreen = ({ route }) => {
  
  const [gameMatrix, setGameMatrix] = useState([]);
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [numberLocked, setNumberLocked] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    createGameMatrix()
  }, []);

  const createGameMatrix = () => {
    const { rows, columns } = route.params;
    
    const tileValues = createTileValueList();

    let tempMatrix = [];
    for(let i = 0; i < rows; i++){
      let tempRow = [];
      for(let j = 0; j < columns; j++){
        tempRow.push({
          rowNumber: i,
          columnNumber: j,
          selected: false,
          locked: false,
          value: (
            tileValues.pop()
          )
        })
      }
      tempMatrix = [...tempMatrix, tempRow]
    }
    setGameMatrix(tempMatrix);
  } 

  const handleTilePressed = (tileInfo) => {
    const { rowNumber, columnNumber, value } = tileInfo;
    let tempMatrix = [...gameMatrix];
    let foundMatch = false;
    setScore(score+1);
    
    selectedTiles.map((selectedTile, i) => {
      if(selectedTile.value == value) {
        foundMatch = true;
        tempMatrix[rowNumber][columnNumber].locked = true;
        tempMatrix[selectedTile.rowNumber][selectedTile.columnNumber].locked = true;
        setNumberLocked(numberLocked+2); // change the +2 when changing to match more than 2
        setScore(score - 1)
      }
    })

    if((selectedTiles.length == 0) || (!foundMatch && selectedTiles.length + 1 < route.params.numberOfMatches)) {
      // havent found a match and we still are able to select another tile
      tempMatrix[rowNumber][columnNumber].selected = true;
      setSelectedTiles([...selectedTiles, tileInfo])
    } else if(!foundMatch && selectedTiles.length + 1 == route.params.numberOfMatches) {
      // havent found a match and we have hit the number of matches so show selected for a second
      if(route.params.difficulty === 'Medium'){
        tempMatrix[rowNumber][columnNumber].selected = true;
        setSelectedTiles([...selectedTiles, tileInfo]);

        setTimeout(() => {
          selectedTiles.map((selectedTile, i) => {
            tempMatrix[selectedTile.rowNumber][selectedTile.columnNumber].selected = false;
          })
          tempMatrix[rowNumber][columnNumber].selected = false;
          setGameMatrix(tempMatrix);
          setSelectedTiles([]);
    
        }, 1000);
      } else {
        selectedTiles.map((selectedTile, i) => {
          tempMatrix[selectedTile.rowNumber][selectedTile.columnNumber].selected = false;
        })
        setSelectedTiles([])
      }
    } else if (foundMatch) {
      // found match so set selected tiles back to []
      selectedTiles.map((selectedTile, i) => {
        tempMatrix[selectedTile.rowNumber][selectedTile.columnNumber].selected = false;
      })
      setSelectedTiles([])
    }
    
    setGameMatrix(tempMatrix);
  }

  const createTileValueList = () => {
    const { rows, columns, numberOfMatches } = route.params;

    let tileValues = [];
    for(let i = 0; i < (rows * columns); i++){
      tileValues.push(Math.floor(i % (rows * columns) / numberOfMatches))
    }
    return tileValues.sort( () => .5 - Math.random() );
  }

  return (
    <View style={styles.gameContainer}>
      <View style={styles.textContainer}>
        <Text>Difficulty: {route.params.difficulty}</Text>
        <Text>Number of Colours to Match: {route.params.numberOfMatches}</Text>
        <Text>Score: {score}</Text>
      </View>
      <View style={styles.boardContainer}>

        <GameBoard 
          gameMatrix={gameMatrix} 
          onTilePressed={handleTilePressed} 
          difficulty={route.params.difficulty}
          numberLocked={numberLocked}
        />
        { numberLocked == route.params.rows * route.params.columns &&
          <View style={styles.textContainer}>
            <Text>You Win!</Text>
          </View>
        }
      </View>
      { numberLocked == route.params.rows * route.params.columns &&
        <ConfettiCannon 
          count={200}
          origin={{x: 0, y: 0}}
          fadeOut={true}
          explosionSpeed={500}
        />
      }
    </View>
  );
}

export default GameScreen;
  
const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    paddingTop: 10
  },
  boardContainer: {
    flex: 3,
    alignItems: 'center',
  }
})