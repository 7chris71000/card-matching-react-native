import React from 'react';
import { render } from '@testing-library/react-native';
import Celebrate from '../components/Celebrate';

describe('<Celebrate/>', () => {
  it('should match snapshot', () => {
    const result = render(<Celebrate/>).toJSON();
    expect(result).toMatchSnapshot();
  });

  it('should render the Celebrate component', () => {
    const result = render(<Celebrate/>);
    expect(result).toBeTruthy();
  });
});
