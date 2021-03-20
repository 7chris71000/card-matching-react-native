import React from 'react';
import { render } from '@testing-library/react-native';
import FlippableCard from '../components/FlippableCard';

describe('<FlippableCard/>', () => {
  it('should match snapshot', () => {
    const result = render(<FlippableCard/>).toJSON();
    expect(result).toMatchSnapshot();
  });

  it('should render the FlippableCard component', () => {
    const result = render(<FlippableCard/>);
    expect(result).toBeTruthy();
  });
});
