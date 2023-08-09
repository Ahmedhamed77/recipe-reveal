import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseURL = 'https://test.kode-t.ru/';

export const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
});

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery,
  refetchOnReconnect: true,
  tagTypes: ['API'],
  endpoints: _ => ({}),
});
