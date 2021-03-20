import React from 'react'
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../screens/HomeScreen';

const navigation = { navigate: jest.fn() };

describe('<HomeScreen/>', () => {
  it('should match snapshot', () => {
    const result = render(<HomeScreen navigation={navigation}/>).toJSON();
    expect(result).toMatchSnapshot();
  });

  it('should render the HomeScreen component', () => {
    const result = render(<HomeScreen navigation={navigation}/>);
    expect(result).toBeTruthy();
  });

  it('should navigate to setup game screen on press of Play', () => {
    const result = render(<HomeScreen navigation={navigation}/>);
    const playButton = result.getByTestId('playButton');

    fireEvent(playButton, 'press');

    expect(navigation.navigate).toBeCalledWith('SetupGameScreen');
  });
  
  it('should navigate to high score screen on press of High Scores', () => {
    const result = render(<HomeScreen navigation={navigation}/>);
    const scoreScreenButton = result.getByTestId('scoresButton');

    fireEvent(scoreScreenButton, 'press');

    expect(navigation.navigate).toBeCalledWith('ScoreScreen');
  });
});
