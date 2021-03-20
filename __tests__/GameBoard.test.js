import React from 'react';
import { render } from '@testing-library/react-native';
import GameBoard from '../components/GameBoard';

describe('<GameBoard/>', () => {

  // has trouble rendering internal map of columns. Not sure the fix currently.
  it('should match snapshot', () => {
    const result = render(
      <GameBoard
        gameMatrix={[
          {
            rowNumber: 0,
            columnNumber: 0,
            selected: false,
            locked: false,
            value: 1
          },
          {
            rowNumber: 0,
            columnNumber: 1,
            selected: false,
            locked: false,
            value: 1
          },
          {
            rowNumber: 1,
            columnNumber: 0,
            selected: false,
            locked: false,
            value: 1
          },
          {
            rowNumber: 1,
            columnNumber: 1,
            selected: false,
            locked: false,
            value: 1
          },
        ]
        }
        onTilePressed={jest.fn()}
        mode={'normal'}
      />
    ).toJSON();
    expect(result).toMatchSnapshot();
  });

  it('should render the GameBoard component', () => {
    const result = render(
      <GameBoard
        gameMatrix={[
          {
            rowNumber: 0,
            columnNumber: 0,
            selected: false,
            locked: false,
            value: 1
          }
        ]
        }
        onTilePressed={jest.fn()}
        mode={'normal'}
      />
    );
    expect(result).toBeTruthy();
  });
});
