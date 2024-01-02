import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

//@desc Create new order
//@route POST api/order
//@access Private
const addOrderItems = asyncHandler(async (req, res) => {
	//get all products from data base with empty object
	res.send("add order items");
});

//@desc get logged in user orders
//@route GET api/orders/myorders
//@access Private
const getMyOrders = asyncHandler(async (req, res) => {
	//get all products from data base with empty object
	res.send("add my orders");
});

//@desc get order by Id
//@route GET api/orders/:id
//@access Admin/Private
const getOrderById = asyncHandler(async (req, res) => {
	//get all products from data base with empty object
	res.send("add order by id");
});

//@desc update order to payed
//@route  GET api/orders/:id/pay
//@access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
	//get all products from data base with empty object
	res.send("update order to payed");
});

//@desc update order to delivered
//@route  GET api/orders/deliver
//@access Admin/Private
const updateOrderToDelivered = asyncHandler(async (req, res) => {
	//get all products from data base with empty object
	res.send("update order to delivered");
});

//@desc get all orders
//@route  GET api/orders/
//@access Admin
const getOrders = asyncHandler(async (req, res) => {
	//get all products from data base with empty object
	res.send("get all orders");
});

export {
	addOrderItems,
	getMyOrders,
	getOrderById,
	updateOrderToPaid,
	updateOrderToDelivered,
	getOrders,
};
