import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import FlippableCard from '../components/FlippableCard';

const onTilePressed = jest.fn();

describe('<FlippableCard/>', () => {
  let result;
  beforeEach(() => result = render(
    <FlippableCard
      value={1}
      onTilePressed={onTilePressed}
      totalColumns={3}
      cardStyle={{}}
      flipped={false}
      mode={'normal'}
    />
    ));

  it('should match snapshot', () => expect(result.toJSON()).toMatchSnapshot());
  it('should render the FlippableCard component', () => expect(result).toBeTruthy());

  it('flips the card when pressed', () => {
    const flipCardPress = result.getByTestId('flipCardId');
    fireEvent(flipCardPress, 'press');
    expect(onTilePressed).toHaveBeenCalled;
  });
});
