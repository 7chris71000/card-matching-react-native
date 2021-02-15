import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { storeData, getData } from '../storage/DataStorage';
import { DataTable } from 'react-native-paper';
import { dummyScoreData } from '../storage/SeedData';

const ScoreScreen = () => {
  const [scores, setScores] = useState([]);
  const [page, setPage] = useState(0);
  const RESULTS_PER_PAGE = 10;

  useEffect(() => {
    getData('@scores').then(result => setScores(result));
  }, []);

  useEffect(() => {
    setPage(Math.ceil(scores.length / RESULTS_PER_PAGE) - 1);
  }, [scores]);

  const setupScores = () => {
    storeData('@scores', dummyScoreData());
  }

  return (
    <View style={styles.gameContainer}>
      
      <View style={styles.textContainer}>
        <Text style={styles.textEntity}>High Scores</Text>
        {/* <TouchableOpacity onPress={() => setupScores()}>
          <Text> Setup Scores</Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.tableContainer}>
        
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={styles.nameCell}>Name</DataTable.Title>
            <DataTable.Title style={styles.centerCell}>Matrix</DataTable.Title>
            <DataTable.Title style={styles.centerCell}>Matches</DataTable.Title>
            <DataTable.Title numeric style={styles.centerCell}>Score</DataTable.Title>
            <DataTable.Title style={styles.dateCell}>Date</DataTable.Title>
          </DataTable.Header>

          { scores.slice(page * RESULTS_PER_PAGE, (page + 1) * RESULTS_PER_PAGE).map((value, index) => {
            const { name, matrix, numberOfMatches, score, date } = value;
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
                  <Text>{numberOfMatches}</Text>
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
    width: '95%'
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
    flex: 7,
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
