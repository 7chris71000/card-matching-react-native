import React from 'react'
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../screens/HomeScreen';

const navigation = { navigate: jest.fn() };

describe('<HomeScreen/>', () => {
  let result;
  beforeEach(() => result = render(<HomeScreen navigation={navigation}/>));

  it('should match snapshot', () => expect(result.toJSON()).toMatchSnapshot());

  it('should render the HomeScreen component', () => expect(result).toBeTruthy());

  it('should navigate to setup game screen on press of Play', () => {
    const playButton = result.getByTestId('playButton');
    fireEvent(playButton, 'press');
    expect(navigation.navigate).toBeCalledWith('SetupGameScreen');
  });
  
  it('should navigate to high score screen on press of High Scores', () => {
    const scoreScreenButton = result.getByTestId('scoresButton');
    fireEvent(scoreScreenButton, 'press');
    expect(navigation.navigate).toBeCalledWith('ScoreScreen');
  });
});
