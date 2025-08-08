import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseURL = "https://b2b-b2c-romerrivero1-1.onrender.com/api/";

const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem("access_token");
    if (token) headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});


export const api = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: (checking) => ({
    signup: checking.mutation({
      query: (objectof) => ({
        url: "signup/",
        method: "POST",
        body: objectof,
      }),
    }),
    login: checking.mutation({
      query: (objectof) => ({
        url: "login/",
        method: "POST",
        body: objectof,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = api;

