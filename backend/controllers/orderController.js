import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

//@desc Create new order
//@route POST api/order
//@access Private
const addOrderItems = asyncHandler(async (req, res) => {
	//get all products from data base with empty object
	const {
		orderItems,
		shippingAddress,
		paymentMethod,
		itemsPrice,
		taxPrice,
		shippingPrice,
		totalPrice,
	} = req.body;

	if (orderItems && orderItems.length === 0) {
		res.staus(400);
		throw new Error("No order items");
	} else {
		const order = new Order({
			//mapping and adding properties before we submit to the database
			orderItems: orderItems.map((order) => ({
				...order,
				product: order._id,
				_id: undefined,
			})),
			user: req.user._id,
			shippingAddress,
			paymentMethod,
			itemsPrice,
			taxPrice,
			shippingPrice,
			totalPrice,
		});

		const createdOrder = await order.save();
		console.log(createdOrder, "created order");
		res.status(201).json(createdOrder);
	}
});

//@desc get logged in user orders
//@route GET api/orders/myorders
//@access Private
const getMyOrders = asyncHandler(async (req, res) => {
	//get all products from data base with empty object
	const orders = await Order.find({ user: req.user._id });
	res.status(200).json(orders);
});

//@desc get order by Id
//@route GET api/orders/:id
//@access Admin/Private
const getOrderById = asyncHandler(async (req, res) => {
	//get all products from data base with empty object
	//find the order (order may be several products) by id, populate the users name and email
	const order = await Order.findById(req.params.id).populate(
		"user",
		"name email"
	);

	if (order) {
		res.status(200).json(order);
	} else {
		res.status(404);
		throw new Error("Order not found");
	}
});

//@desc update order to payed
//@route  PUT api/orders/:id/pay
//@access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
	//get all products from data base with empty object
	const order = await Order.findById(req.params.id);

	if (order) {
		order.isPaid = true;
		order.paidAt = Date.now();
		order.paymentResult = {
			id: req.body.id,
			status: req.body.status,
			update_time: req.body.update_time,
			email_address: req.body.payer.email_address,
		};
		const updatedOrder = await order.save();
		res.status(200).json(updatedOrder);
	} else {
		res.status(404);
		throw new Error("Order not found");
	}
});
// 5fJywq9M.!NCiaK
//@desc update order to delivered
//@route  PUT api/orders/deliver
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
	const orders = await Order.find({}).populate("user", "id name");
	res.status(200).json(orders);
});

export {
	addOrderItems,
	getMyOrders,
	getOrderById,
	updateOrderToPaid,
	updateOrderToDelivered,
	getOrders,
};
