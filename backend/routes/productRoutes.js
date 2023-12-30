import express from "express";
const router = express.Router();
import {
	getProducts,
	getProductById,
} from "../controllers/productController.js";
//route logic lives in productController.js
router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
