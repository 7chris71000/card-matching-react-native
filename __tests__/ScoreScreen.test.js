import React from 'react';
import { act, render } from '@testing-library/react-native';
import ScoreScreen from '../screens/ScoreScreen';

// Need to figure out how to work with the child component - DataTable. Currently is mocked out

describe('<ScoreScreen/>', () => {
  let result;
  beforeEach(() => result = render(<ScoreScreen/>));

  it('should match snapshot', async () => {
    await act(async () => {
      expect(result.toJSON()).toMatchSnapshot()
    })
  });
  it('should render the ScoreScreen component', () => expect(result).toBeTruthy());
});
