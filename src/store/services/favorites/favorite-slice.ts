import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Recipe} from '../recipes/types';

export interface FavoriteSliceState {
  favorites: Recipe[];
}

const initialState: FavoriteSliceState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favoriteSlice',
  initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<Recipe>) => {
      const combined = [...state.favorites, action.payload];
      const unique = combined.filter(
        (item, index, self) =>
          index === self.findIndex(t => t.uuid === item.uuid),
      );

      state.favorites = unique;
    },
    removeFavorites: (
      state,
      action: PayloadAction<{
        recipe: Recipe;
      }>,
    ) => {
      state.favorites = state.favorites.filter(
        item => item.uuid !== action.payload.recipe.uuid,
      );
    },

    resetFavoriteSlice: () => {
      return initialState;
    },
  },
});

export const {addFavorites, removeFavorites, resetFavoriteSlice} =
  favoritesSlice.actions;

export default favoritesSlice;
