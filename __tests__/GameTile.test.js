import React from 'react';
import { render } from '@testing-library/react-native';
import GameTile from '../components/GameTile';

describe('<GameTile/>', () => {
  let result;
  beforeEach(() => result = render(<GameTile/>));

  it('should match snapshot', () => expect(result.toJSON()).toMatchSnapshot());
  it('should render the GameTile component', () => expect(result).toBeTruthy());
});
