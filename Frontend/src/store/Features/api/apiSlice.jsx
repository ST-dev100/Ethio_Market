import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "ProductsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://ethio-market-ehzd.vercel.app" }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    gettUsers: builder.query({
      query: () => "users",
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