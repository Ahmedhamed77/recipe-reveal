import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';

import {TabParamList, TabParams} from './interface';
import {FavoriteStack} from '../favorite-stack';
import {MainStack} from '../main-stack';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={TabParams.MainStack}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={TabParams.MainStack}
        component={MainStack}
        options={({}) => ({
          title: 'Main',

          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}: {color: string}) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        })}
      />

      <Tab.Screen
        name={TabParams.FavoriteStack}
        component={FavoriteStack}
        options={({}) => ({
          title: 'Favorite',

          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}: {color: string}) => (
            <MaterialIcons name="favorite" size={24} color={color} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};
