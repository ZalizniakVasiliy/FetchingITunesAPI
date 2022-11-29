import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_BASE_URL} from '../../utils/API_CONFIG';

export const iTunesApi = createApi({
    reducerPath: 'iTunesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),

    endpoints: build => ({
        getArtistData: build.query({
                query: artist => `search?term=${artist}&media=music&limit=10`,
            },
        ),
    }),
});

export const {useGetArtistDataQuery} = iTunesApi;