import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import GameBoard from '../components/GameBoard';
import Celebrate from '../components/Celebrate';

const GameScreen = ({ route }) => {
  
  const [gameMatrix, setGameMatrix] = useState([]);
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [numberLocked, setNumberLocked] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    createGameMatrix()
  }, []);

  const resetBoard = () => {
    setGameMatrix([])
    setSelectedTiles([])
    setNumberLocked(0)
    setScore(0)
    createGameMatrix()
  }

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
    const { numberOfMatches } = route.params;
    const { rowNumber, columnNumber, value } = tileInfo;
    let tempMatrix = [...gameMatrix];
    let allMatch = true;
    setScore(score+1);  

    if(selectedTiles.length) {
      // only enter if selected tiles has more than 1 entry
      selectedTiles.map((selectedTile) => {
        if(selectedTile.value !== value) {
          // no need to continue since they are not all the same
          allMatch = false;
        }
      })

      if(allMatch && selectedTiles.length + 1 === numberOfMatches) {
        // lock the selected tiles and active tile
        selectedTiles.map(selectedTile => 
          tempMatrix[selectedTile.rowNumber][selectedTile.columnNumber].locked = true
        )
        tempMatrix[rowNumber][columnNumber].locked = true;
        setNumberLocked(numberLocked + numberOfMatches);
        setScore(score - (numberOfMatches - 1))
      }
    }

    if(!allMatch) {
      // Didn't get all matches
      tempMatrix[rowNumber][columnNumber].selected = true;
      setSelectedTiles([...selectedTiles, tileInfo]);

      setTimeout(() => {
        selectedTiles.map(selectedTile => 
          tempMatrix[selectedTile.rowNumber][selectedTile.columnNumber].selected = false
        )
        tempMatrix[rowNumber][columnNumber].selected = false;
        setGameMatrix(tempMatrix);
        setSelectedTiles([]);
      }, 1000);

    } else if (selectedTiles.length + 1 < numberOfMatches) {
      // We still are able to select another tile
      tempMatrix[rowNumber][columnNumber].selected = true;
      setSelectedTiles([...selectedTiles, tileInfo])
    } else if (allMatch) {
      // found match so set selected tiles back to []
      selectedTiles.map(selectedTile => 
        tempMatrix[selectedTile.rowNumber][selectedTile.columnNumber].selected = false
      )
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
        <View style={styles.textBox}>
          <Text style={styles.textEntity}>{route.params.mode}</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.textEntity}>Matches: {route.params.numberOfMatches}</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.textEntity}>Score: {score}</Text>
        </View>
      </View>

      <View style={styles.boardContainer}>
        <GameBoard 
          gameMatrix={gameMatrix} 
          onTilePressed={handleTilePressed} 
          mode={route.params.mode}
          numberLocked={numberLocked}
        />
        <TouchableOpacity style={styles.resetButton} onPress={() => resetBoard()}>
          <Text style={styles.resetButtonText}>
            Reset
          </Text>
          
          <Icon 
            name={'ios-reload-outline'}
            type={'ionicon'}
            containerStyle={styles.resetIcon}/>
        </TouchableOpacity>
        { numberLocked == route.params.rows * route.params.columns &&
          <View style={styles.textContainer}>
            <Text>You Win!</Text>
          </View>
        }
      </View>

      <Celebrate fire={ numberLocked == route.params.rows * route.params.columns }/>
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
    paddingTop: 10,
    flexDirection: 'row',
    width: '100%'
  },
  textBox: {
    width: '33.33%',
    alignItems: 'center',
  },
  textEntity: {
    fontSize: 20,
    position: 'absolute',
    bottom: 10
  },
  boardContainer: {
    flex: 8,
    alignItems: 'center',
  },
  resetButton: {
    height: 40,
    width: 120,
    
    alignItems: 'center',
    justifyContent: 'center',
    
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 1,
    backgroundColor: '#34a8eb',
    borderRadius: 50,
    flexDirection: 'row',

    marginTop: 10
  },
  resetIcon: {
    transform: [
      { scaleX: -1 }
    ],
  },
  resetButtonText: {
    fontSize: 20,
    marginRight: 10
  }
})