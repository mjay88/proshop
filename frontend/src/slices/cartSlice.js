import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem("cart")
	? JSON.parse(localStorage.getItem("cart"))
	: { cartItems: [], shippingAddress: {}, paymentMethod: "PayPal" };

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			// The item to add to the cart
			const item = action.payload;

			// Check if the item is already in the cart
			const existItem = state.cartItems.find((x) => x._id === item._id);

			if (existItem) {
				// If exists, update quantity
				state.cartItems = state.cartItems.map((x) =>
					x._id === existItem._id ? item : x
				);
			} else {
				// If not exists, add new item to cartItems
				state.cartItems = [...state.cartItems, item];
			}

			return updateCart(state);
		},
		//action/ action.payload is the item id
		removeFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(item) => item._id !== action.payload
			);

			return updateCart(state);
		},
		//save the shipping address
		saveShippingAddress: (state, action) => {
			state.shippingAddress = action.payload;
			return updateCart(state);
		},
		//save the payment method
		savePaymentMethod: (state, action) => {
			state.paymentMethod = action.payload;
			return updateCart(state);
		},
		//clear cart after order placed
		clearCartItems: (state, action) => {
			state.cartItems = [];
			return updateCart(state);
		},
	},
});

export const {
	addToCart,
	removeFromCart,
	saveShippingAddress,
	savePaymentMethod,
	clearCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
