import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cocktailApi = createApi({
  reducerPath: "cocktailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "www.thecocktaildb.com/api/json/v1/1",
  }),
  endpoints: (builder) => ({
    getCocktailsByName: builder.query({
      query: (name) => `/search.php?s=${name}`,
    }),
    getCocktailById: builder.query({
      query: (id) => `/lookup.php?i=${id}`,
    }),
  }),
});

export default cocktailApi;
export const { useGetCocktailsByNameQuery, useGetCocktailByIdQuery } =
  cocktailApi;
