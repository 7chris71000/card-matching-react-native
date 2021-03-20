import React from 'react';
import { render } from '@testing-library/react-native';
import NumericStepper from '../components/NumericStepper';

describe('<NumericStepper/>', () => {
  it('should match snapshot', () => {
    const result = render(<NumericStepper/>).toJSON();
    expect(result).toMatchSnapshot();
  });

  it('should render the NumericStepper component', () => {
    const result = render(<NumericStepper/>);
    expect(result).toBeTruthy();
  });
});
