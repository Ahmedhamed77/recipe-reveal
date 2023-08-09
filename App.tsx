/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {Route} from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Route />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
