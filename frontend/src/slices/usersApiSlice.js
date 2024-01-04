import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (data) => ({
				//replaces regular fetch request, useEffect and useState we had on HomeScreen
				url: `${USERS_URL}/auth`,
				method: "POST",
				body: data,
			}),
			keepUnusedDataFor: 5,
		}),
		//register
		register: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}`,
				method: "POST",
				body: data,
			}),
		}),
		//logout server
		logout: builder.mutation({
			query: () => ({
				url: `${USERS_URL}/logout`,
				method: "POST",
			}),
		}),
		//update profile
		profile: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/profile`,
				method: "PUT",
				body: data,
			}),
		}),
	}),
});

export const {
	useLoginMutation,
	useLogoutMutation,
	useRegisterMutation,
	useProfileMutation,
} = usersApiSlice;
