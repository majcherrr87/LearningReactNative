import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CityData, FollowingDaysType } from "../types/api";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getCityData: builder.query<CityData, { location: string }>({
      query: ({ location }) => {
        return {
          url: "current.json",
          params: {
            key: process.env.EXPO_PUBLIC_API_KEY,
            lang: "pl",
            q: location,
          },
        };
      },
    }),
    getFollowingDays: builder.query<FollowingDaysType, { location: string }>({
      query: ({ location }) => {
        return {
          url: "forecast.json",
          params: {
            key: process.env.EXPO_PUBLIC_API_KEY,
            q: location,
            lang: "pl",
            days: 7,
          },
        };
      },
    }),
  }),
});
export const { useGetCityDataQuery, useGetFollowingDaysQuery } = weatherApi;
