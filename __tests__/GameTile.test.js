import React from 'react';
import { render } from '@testing-library/react-native';
import GameTile from '../components/GameTile';

describe('<GameTile/>', () => {
  it('should match snapshot', () => {
    const result = render(<GameTile/>).toJSON();
    expect(result).toMatchSnapshot();
  });

  it('should render the GameTile component', () => {
    const result = render(<GameTile/>);
    expect(result).toBeTruthy();
  });
});
