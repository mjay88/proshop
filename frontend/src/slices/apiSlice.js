import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; //createApi instead of createSlice because this route/action will be dealing with asycronous code
import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
	baseQuery,
	tagTypes: ["Product", "Order", "User"],
	endpoints: (builder) => ({}),
});
