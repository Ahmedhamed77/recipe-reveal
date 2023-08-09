import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type NO_PARAMS = undefined;

export enum FavoriteParams {
  Favorite = 'Favorite',
}

export type FavoriteParamsList = {
  [FavoriteParams.Favorite]: NO_PARAMS;
};

export type MainNavigation = NativeStackNavigationProp<
  FavoriteParamsList,
  FavoriteParams
>;
