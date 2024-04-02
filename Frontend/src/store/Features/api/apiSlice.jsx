import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "ProductsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    gettUsers: builder.query({
      query: () => "photos",
      providesTags: ["Users"],
    }),
    createUser: builder.mutation({
      query: (name) => ({
        url: "users",
        method: "POST",
        body: { name },
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useGettUsersQuery, useCreateUserMutation } = apiSlice;