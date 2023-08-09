import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Recipe} from '../../store/services/recipes/types';

export type NO_PARAMS = undefined;

export enum MainParams {
  Recipes = 'Recipes',
  Recipe = 'Recipe',
}

export type MainParamsList = {
  [MainParams.Recipes]: NO_PARAMS;
  [MainParams.Recipe]: {uuid?: string; recipe: Recipe};
};

export type MainNavigation = NativeStackNavigationProp<
  MainParamsList,
  MainParams
>;
