import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { storeData, getData } from '../storage/DataStorage';
import { DataTable } from 'react-native-paper';
// import { dummyScoreData } from '../storage/SeedData';

const ScoreScreen = () => {
  let [scores, setScores] = useState([]);
  const [page, setPage] = useState(0);
  const [sortingDirections, setSortingDirections] = useState({
    name: undefined,
    matrix: undefined,
    matches: undefined,
    score: undefined,
    date: undefined,
  });
  const RESULTS_PER_PAGE = 10;
  const SORTING_TYPES = [
    'ascending',
    'descending',
    undefined
  ]

  useEffect(() => {
    getData('@scores').then(result => setScores(result));
  }, []);

  useEffect(() => {
    sortScores()
  }, [sortingDirections]);

  const setupScores = () => {
    storeData('@scores', dummyScoreData());
  }

  const handleSortingPress = sortType => {
    let newSortTypeLoc = SORTING_TYPES.findIndex(value => value === sortingDirections[sortType]) + 1;
    if(newSortTypeLoc >= SORTING_TYPES.length){
      newSortTypeLoc = newSortTypeLoc % SORTING_TYPES.length;
    }

    let tempSortingDirections = {...sortingDirections};
    Object.entries(tempSortingDirections).forEach(([type, direction]) => {
      if(type == sortType) {
        tempSortingDirections[sortType] = SORTING_TYPES[newSortTypeLoc];
      } else {
        tempSortingDirections[type] = undefined;
      }
    })
    setSortingDirections(tempSortingDirections);
  }

  const sortScores = () => {
    const tempScores = [...scores];
    let sortInfo = Object.entries(sortingDirections).find(([type, direction]) => direction !== undefined);

    if(sortInfo) {
      const sortType = sortInfo[0];
      const direction = sortInfo[1];
      tempScores.sort((score0, score1) => {
        if(score0[sortType] == score1[sortType]){
          return 0
        } else {
          if(direction == 'ascending'){
            return (score0[sortType] < score1[sortType]) ? -1 : 1
          } else {
            return (score0[sortType] > score1[sortType]) ? -1 : 1
          }
        }
      })
    }

    setScores(tempScores);
  }

  return (
    <View style={styles.gameContainer}>
      
      <View style={styles.textContainer}>
        <Text style={styles.textEntity}>High Scores</Text>
        {/* 
        <TouchableOpacity onPress={() => setupScores()}>
          <Text> Setup/Reset Scores</Text>
        </TouchableOpacity> 
        */}
      </View>

      <View style={styles.tableContainer}>
        
        <DataTable>
          <DataTable.Header>
            <DataTable.Title 
              style={styles.nameCell}
              sortDirection={sortingDirections.name}
              onPress={() => handleSortingPress('name')}>
                Name
            </DataTable.Title>
            <DataTable.Title 
              style={styles.centerCell}
              sortDirection={sortingDirections.matrix}
              onPress={() => handleSortingPress('matrix')}>
                Matrix
            </DataTable.Title>
            <DataTable.Title 
              style={styles.centerCell}
              sortDirection={sortingDirections.matches}
              onPress={() => handleSortingPress('matches')}>
                Matches
            </DataTable.Title>
            <DataTable.Title numeric 
              style={styles.centerCell}
              sortDirection={sortingDirections.score}
              onPress={() => handleSortingPress('score')}>
                Score
            </DataTable.Title>
            <DataTable.Title 
              style={styles.dateCell}
              sortDirection={sortingDirections.date}
              onPress={() => handleSortingPress('date')}>
                Date
            </DataTable.Title>
          </DataTable.Header>

          { scores.slice(page * RESULTS_PER_PAGE, (page + 1) * RESULTS_PER_PAGE).map((value, index) => {
            const { name, matrix, matches, score, date } = value;
            const scoreDate = new Date(date);
            
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell style={styles.nameCell}>
                  <Text>{name}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.centerCell}>
                  <Text>{matrix}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.centerCell}>
                  <Text>{matches}</Text>
                </DataTable.Cell>
                <DataTable.Cell numeric style={styles.centerCell}>
                  <Text>{score}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.dateCell}>
                  {scoreDate.toLocaleDateString()} ({scoreDate.getHours()}:{scoreDate.getMinutes()})
                </DataTable.Cell>
              </DataTable.Row>
            )          
          })}

          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(scores.length / RESULTS_PER_PAGE)}
            onPageChange={page => setPage(page)}
            label={`Page ${(page + 1)} of ${Math.ceil(scores.length / RESULTS_PER_PAGE)}`}
            />
        </DataTable>
      </View>
    </View>
  );
}

export default ScoreScreen;
  
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    width: '33.33%',
    alignItems: 'center',
  },
  textEntity: {
    fontSize: 20,
  },
  tableContainer: {
    flex: 8,
    alignItems: 'center',
    width: '98%'
  },
  resetButton: {
    height: 40,
    width: 400,
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
  },
  nameCell: {
    flex: 6,
  },
  centerCell: {
    justifyContent: 'center',
    flex: 5,
  },
  dateCell: {
    justifyContent: 'flex-end',
    flex: 10
  }
})
