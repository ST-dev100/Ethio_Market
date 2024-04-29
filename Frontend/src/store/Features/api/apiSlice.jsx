import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "ProductsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    gettUsers: builder.query({
      query: () => "products",
      providesTags: ["Users"],
    }),
    createUser: builder.mutation({
      query: (name) => ({
        url: "products",
        method: "POST",
        body: { name },
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useGettUsersQuery, useCreateUserMutation } = apiSlice;