import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => ({
				//replaces regular fetch request, useEffect and useState we had on HomeScreen
				url: PRODUCTS_URL,
			}),
			providesTags: ["Product"],
			keepUnusedDataFor: 5,
		}),
		getProductDetails: builder.query({
			query: (id) => ({
				//replaces regular fetch request, useEffect and useState we had on HomeScreen
				url: `${PRODUCTS_URL}/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
		createProduct: builder.mutation({
			query: () => ({
				url: PRODUCTS_URL,
				method: "POST",
			}),
			invalidatesTags: ["Product"], //stop from being cached so we have fresh data
		}),
		updateProduct: builder.mutation({
			query: (data) => ({
				url: `${PRODUCTS_URL}/${data._id}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["Product"],
		}),
	}),
});

export const {
	useGetProductsQuery,
	useGetProductDetailsQuery,
	useCreateProductMutation,
	useUpdateProductMutation,
} = productsApiSlice;
