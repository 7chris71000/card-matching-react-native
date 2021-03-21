import React from 'react';
import { act, render } from '@testing-library/react-native';
import ScoreScreen from '../screens/ScoreScreen';

jest.mock('react-native-paper', () => 'DataTable');

describe('<ScoreScreen/>', () => {
  let result;
  beforeEach(() => result = render(<ScoreScreen/>));

  it('should match snapshot', async () => {
    await act(async () => {
      expect(result.toJSON()).toMatchSnapshot();
    })
  });

  it('should render the ScoreScreen component', async () => {
    await act(async () => {
      expect(result).toBeTruthy();
    })
  });
});
