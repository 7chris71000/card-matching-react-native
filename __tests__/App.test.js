import React from 'react';
import { act, render } from '@testing-library/react-native';
import App from '../App';

describe('<App />', () => {
  let result;
  beforeEach(() => result = render(<App/>));

  it('should match snapshot', async () => {

    // this await is to wait for all state variables to be done updating. 
    // The test will pass without it but will have a console error.
    // I think I should be manually setting different state variables?
    // not sure as this error is coming from a NavigationContainer I did not make
    await act(async () => {
      expect(result.toJSON()).toMatchSnapshot();
    });
  });

  it('should render the App component', async () => {
    await act(async () => {
      expect(result).toBeTruthy();
    });
  });
});
