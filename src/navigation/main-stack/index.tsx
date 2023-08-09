import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {MainParams, MainParamsList} from './interface';
import {RecipeScreen, RecipesScreen} from '../../screens';

const Stack = createNativeStackNavigator<MainParamsList>();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={MainParams.Recipes} screenOptions={{}}>
      <Stack.Screen
        name={MainParams.Recipes}
        component={RecipesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={MainParams.Recipe}
        component={RecipeScreen}
      />
    </Stack.Navigator>
  );
};
