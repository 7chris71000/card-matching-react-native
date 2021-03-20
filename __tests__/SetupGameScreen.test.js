import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SetupGameScreen from '../screens/SetupGameScreen';

const navigation = { navigate: jest.fn() };

describe('<SetupGameScreen/>', () => {
  it('should match snapshot', () => {
    const result = render(<SetupGameScreen navigation={navigation}/>).toJSON();
    expect(result).toMatchSnapshot();
  });

  it('should render the SetupGameScreen component', () => {
    const result = render(<SetupGameScreen navigation={navigation}/>);
    expect(result).toBeTruthy();
  });

  it('should navigate to game screen on press of Play', () => {
    const result = render(<SetupGameScreen navigation={navigation}/>);
    const playButton = result.getByTestId('playButton');

    fireEvent(playButton, 'press');

    // object is the state variables from the form
    expect(navigation.navigate).toBeCalledWith('GameScreen', {"columns": 3, "mode": "Normal", "numberOfMatches": 1, "rows": 3});
  }); 
});
