import React from 'react';
import { act, render } from '@testing-library/react-native';
import App from '../App';

describe('<App />', () => {
  it('should match snapshot', async () => {
    const result = render(<App/>).toJSON();

    // this await is to wait for all state variables to be done updating. 
    // The test will pass without it but will have a console error.
    // I think I should be manually setting different state variables?
    // not sure as this error is coming from a NavigationContainer I did not make
    await act(async () => {
      expect(result).toMatchSnapshot();
    });
  });
});
