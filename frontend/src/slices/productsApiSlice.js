import { PRODUCTS_URL, UPLOAD_URL } from "../constants";
import { apiSlice } from "./apiSlice";
//work flow for adding functionality = add the back end with the controller, whatever iterations your gonna have with the data base -> go to the front end and update the slice and actions -> update the user interface
export const productsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: ({ pageNumber }) => ({
				//replaces regular fetch request, useEffect and useState we had on HomeScreen
				url: PRODUCTS_URL,
				params: {
					pageNumber,
				},
			}),
			providesTags: ["Products"],
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
			invalidatesTags: ["Products"], //stop from being cached so we have fresh data
		}),
		updateProduct: builder.mutation({
			query: (data) => ({
				url: `${PRODUCTS_URL}/${data._id}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["Products"],
		}),
		uploadProductImage: builder.mutation({
			query: (data) => ({
				url: `${UPLOAD_URL}`,
				method: "POST",
				body: data,
			}),
		}),
		deleteProduct: builder.mutation({
			query: (productId) => ({
				url: `${PRODUCTS_URL}/${productId}`,
				method: "DELETE",
			}),
		}),
		createReview: builder.mutation({
			query: (data) => ({
				url: `${PRODUCTS_URL}/${data.productId}/reviews`,
				method: "POST",
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
	useUploadProductImageMutation,
	useDeleteProductMutation,
	useCreateReviewMutation,
} = productsApiSlice;
