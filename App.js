import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/Store';
// import store from './src/redux/Store';
import { PersistGate } from 'redux-persist/integration/react'
import { Text } from 'react-native';
import MainStackNavigator from './src/navigation/AppNavigator';

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
      <MainStackNavigator />
      </PersistGate>
    </Provider>
  );
}
