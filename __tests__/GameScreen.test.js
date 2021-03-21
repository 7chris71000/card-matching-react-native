import React from 'react';
import { render } from '@testing-library/react-native';
import GameScreen from '../screens/GameScreen';

const navigation = { navigate: jest.fn() };

// tests should be deterministic. This mocks out Math.random so we can match our screenshot
const mockMath = Object.create(global.Math);
mockMath.random = () => 0.123;
global.Math = mockMath;

describe('<GameScreen/>', () => {
  let result;
  beforeEach(() => result = render(
    <GameScreen 
      navigation={navigation}
      route={{
        params: {
          "columns": 3,
          "mode": "Normal",
          "numberOfMatches": 1,
          "rows": 3
        }
      }}
    />
  ));

  it('should match snapshot', () => expect(result.toJSON()).toMatchSnapshot());
  it('should render the GameScreen component', () => expect(result).toBeTruthy());
});
