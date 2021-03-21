import React from 'react';
import { render } from '@testing-library/react-native';
import FlippableCard from '../components/FlippableCard';

describe('<FlippableCard/>', () => {
  let result;
  beforeEach(() => result = render(<FlippableCard/>));

  it('should match snapshot', () => expect(result.toJSON()).toMatchSnapshot());
  it('should render the FlippableCard component', () => expect(result).toBeTruthy());
});
