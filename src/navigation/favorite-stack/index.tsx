import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {FavoriteParamsList, FavoriteParams} from './interface';
import {FavoritesScreen} from '../../screens';

const Stack = createNativeStackNavigator<FavoriteParamsList>();

export const FavoriteStack = () => {
  return (
    <Stack.Navigator initialRouteName={FavoriteParams.Favorite}>
      <Stack.Screen
        name={FavoriteParams.Favorite}
        component={FavoritesScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
