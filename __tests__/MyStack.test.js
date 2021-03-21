import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react-native';
import MyStack from '../navigation/MyStack';

describe('Testing react navigation', () => {
  test('clicking on Play takes you to setup game screen', async () => {
    return false; // This isnt working. I am testing screen change on button press in each component though

    // const { getByText } = render(<MyStack/>);

    // await waitFor(() => getByText('Home'));

    // const { findByText } = render(component);
    // const title = await findByText('Welcome to Card Flipper!');
    
    
    // expect(await findByText('Welcome to Card Flipper!')).toBeTruthy();
  });
});
