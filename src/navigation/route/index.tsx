import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {TabNavigation} from '../tabs';

const Stack = createNativeStackNavigator();

export const Route = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'tabs'}
        component={TabNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
