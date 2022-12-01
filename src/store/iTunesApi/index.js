import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../utils/API_CONFIG";

export const iTunesApi = createApi({
  reducerPath: "iTunesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),

  endpoints: (build) => ({
    getArtistData: build.query({
      query: (artist) =>
        `search?term=${encodeURI(artist).replaceAll("%20", "+")}&media=music`,
    }),
  }),
});

export const { useGetArtistDataQuery } = iTunesApi;
