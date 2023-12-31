import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (data) => ({
				//replaces regular fetch request, useEffect and useState we had on HomeScreen
				url: USERS_URL / auth,
				method: POST,
				body: data,
			}),
			keepUnusedDataFor: 5,
		}),
	}),
});

export const { useLoginMutation } = usersApiSlice;
