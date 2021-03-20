import React from 'react';
import { render } from '@testing-library/react-native';
import GameBoard from '../components/GameBoard';

describe('<GameBoard/>', () => {
  let result;
  beforeEach(() => {
    const gameMatrix = [
      [ 
        { rowNumber: 0, columnNumber: 0, selected: false, locked: false, value: 1, }, 
        { rowNumber: 0, columnNumber: 1, selected: false, locked: false, value: 1, }, 
      ],
      [
        { rowNumber: 1, columnNumber: 0, selected: false, locked: false, value: 1 },
        { rowNumber: 1, columnNumber: 1, selected: false, locked: false, value: 1 },
      ]
    ];

    result = render(
      <GameBoard
        gameMatrix={gameMatrix}
        onTilePressed={jest.fn()}
        mode={'normal'}
      />
    );
  });

  it('should match snapshot', () => expect(result.toJSON()).toMatchSnapshot());
  it('should render the GameBoard component', () => expect(result).toBeTruthy());
});
