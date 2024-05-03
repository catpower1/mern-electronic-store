import express = require("express");
import productRouter from "./productRoutes";
import userRouter from "./userRoutes";

const router = express.Router();

router.use("/product",productRouter);
router.use("/user",userRouter);

export default router;