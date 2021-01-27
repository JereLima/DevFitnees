import React from 'react';
import {store, persistor} from './src/store';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';
import {View, Text, SafeAreaView} from 'react-native';
import MainStackNavigator from './src/navigators/MainStackNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainStackNavigator />
      </PersistGate>
    </Provider>
  );
};
