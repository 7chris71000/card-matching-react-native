import React from 'react';
import { render } from '@testing-library/react-native';
import Celebrate from '../components/Celebrate';

describe('<Celebrate/>', () => {
  let result;
  beforeEach(() => result = render(<Celebrate/>))
  
  it('should match snapshot', () => expect(result.toJSON()).toMatchSnapshot());
  it('should render the Celebrate component', () => expect(result).toBeTruthy());
});
