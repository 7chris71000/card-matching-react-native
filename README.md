# Card Matching Game

## Overview

This is a card matching game created to practice react-native development. An example of the type of game this app emulates can be found [here](https://www.helpfulgames.com/subjects/brain-training/memory.html).

## Running Application

### Requirements

- `expo-cli v4.1.6`
- Either an iOS/Android emulator or physical device with Expo app installed

### Installation

1. Locally clone repository
2. Visit repository in terminal
3. Run the following commands in your terminal at the application directory:
   1. `$ yarn install`
   2. `$ expo start`
   3. Either scan QR code on your device or open in emulator

_Note: If you have any problems running this application using the above steps please submit an issue. If you found your own solution feel free to submit a pull request updating this README. Thanks for your help!_

## Contributors

[Christopher Francis](https://github.com/7chris71000)

## Screens

**Home**

<img src='https://github.com/7chris71000/card-matching-react-native/blob/master/images/screenshots/HomeScreen.png?raw=true' alt='Home' height='500'>

---

**Game Setup**

<img src='https://github.com/7chris71000/card-matching-react-native/blob/master/images/screenshots/SetupScreen.png?raw=true' alt='Setup Game' height='500'>

---

**Game Screen (Start)**

<img src='https://github.com/7chris71000/card-matching-react-native/blob/master/images/screenshots/GameScreenFresh.png?raw=true' alt='Game Start' height='500'>

---

**Game Screen (Playing)**

<img src='https://github.com/7chris71000/card-matching-react-native/blob/master/images/screenshots/GameScreenPlayed.png?raw=true' alt='Game Playing' height='500'>

---

**Game Screen (Finished)**

<img src='https://github.com/7chris71000/card-matching-react-native/blob/master/images/screenshots/GameScreenFinished.png?raw=true' alt='Game Finished' height='500'>

---

**High Scores**

<img src='https://github.com/7chris71000/card-matching-react-native/blob/master/images/screenshots/HighScoresScreen.png?raw=true' alt='High Scores' height='500'>

## Testing

This app uses [jest](https://jestjs.io/) and [react-native-testing-library](https://github.com/callstack/react-native-testing-library). Follow these steps to test locally.

1. Visit repository in terminal
2. `yarn test` to run all tests
   1. `yarn test -u` after you update a component to create a new snapshot
   2. `yarn test __tests__/<Component Name>.test.js` to run a single components tests
