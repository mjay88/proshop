import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//@desc Fetch all products
//@route GET /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
	//get all products from data base with empty object
	const products = await Product.find({});

	res.json(products);
});

//@desc Fetch individual product
//@route GET /api/products/:id
//@access Public
const getProductById = asyncHandler(async (req, res) => {
	//get all products from data base with empty object
	const product = await Product.findById(req.params.id);

	if (product) {
		return res.json(product);
	} else {
		res.status(404);
		throw new Error("Resource not found");
	}
});

//@desc Create a product
//@route POST /api/products
//@access Private/admin

const createProduct = asyncHandler(async (req, res) => {
	//create product using product model
	const product = new Product({
		name: "Sample name",
		price: 0,
		user: req.user._id,
		image: "images/sample.jpg",
		brand: "Sample Brand",
		category: "Sample category",
		countInStock: 0,
		numReviews: 0,
		description: "Sample description",
	});

	const createdProduct = await product.save();
	res.status(201).json(createdProduct);
});

//@desc Update a product
//@route PUT /api/products/:id
//@access private/admin

const updateProduct = asyncHandler(async (req, res) => {
	const { name, price, description, brand, category, image, countInStock } =
		req.body;

	const product = await Product.findById(req.params.id);

	if (product) {
		product.name = name;
		product.price = price;
		product.description = description;
		product.image = image;
		product.brand = brand;
		product.category = category;
		product.countInStock = countInStock;

		const updatedProduct = await product.save();
		res.json(updatedProduct);
	} else {
		res.status(404);
		throw new Error("Resource not found");
	}
});

//@desc delete a product
//@route DELETE /api/products/:id
//@access private/admin

const deleteProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (product) {
		await Product.deleteOne({ _id: product._id });
		res.status(200).json({ message: "Product deleted" });
	} else {
		res.status(404);
		throw new Error("Resource not found");
	}
});

export {
	getProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
};
