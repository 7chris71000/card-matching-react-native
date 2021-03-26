import React from 'react';
import { render } from '@testing-library/react-native';
import Celebrate from '../components/Celebrate';

describe('<Celebrate/>', () => {
  
  it('should render the Celebrate component when the fire prop is true', () => {
    const result = render(<Celebrate fire={true}/>);
    expect(result).toBeTruthy();
  });

  it('should render the Celebrate component children when the fire prop is true', () => {
    const { container: { children }} = render(<Celebrate fire={true}/>);
    expect(children.length).toEqual(3);
  });

  it('should render null as the Celebrate component when the fire prop is false', () => {
    const result = render(<Celebrate fire={false}/>);
    expect(result.container.children).toEqual([]);
  });
  
});
