import express = require("express");
import userController from "../controllers/userController";
import cookieParser = require("cookie-parser");

const router : express.Router = express.Router();

router.get('/authenticate',userController.authenticate)
router.get('/logout',userController.logout)
router.post('/login',userController.login);
router.get('/:id',userController.getUser);


export default router;