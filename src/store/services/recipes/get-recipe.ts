import {baseApi} from '../../config';
import {recipesEndpoints} from './endpoints';
import {Recipe} from './types';

const fetchRecipeDetails = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: build => ({
    getRecipe: build.query<Recipe, {uuid: string}>({
      query: params => ({
        url: recipesEndpoints.getRecipeDetails,
        method: 'GET',
        params: {
          uuid: params.uuid,
        },
      }),
    }),
  }),
});

export const {useGetRecipeQuery} = fetchRecipeDetails;
