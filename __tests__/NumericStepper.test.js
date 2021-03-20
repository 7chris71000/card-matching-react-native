import React from 'react';
import { render } from '@testing-library/react-native';
import NumericStepper from '../components/NumericStepper';

describe('<NumericStepper/>', () => {
  let result;
  beforeEach(() => result = render(<NumericStepper/>));

  it('should match snapshot', () => expect(result).toMatchSnapshot());
  it('should render the NumericStepper component', () => expect(result).toBeTruthy());
});
