import express = require("express");
import productController from "../controllers/productController";

const router : express.Router = express.Router();

router.post('/categoryProducts',productController.getProuctsByCategories);
router.get('/categories',productController.getCategories);
router.get('/:id',productController.product);
router.get('/products/:page',productController.products);


export default router;