import express from "express";
import { authControllers } from "../../controller/index.js";
import { apiRoutes } from "../../helper/index.js";

const router = express.Router();
const { auth } = apiRoutes;
const { SIGN_UP, LOGIN, LOGOUT } = auth;
const { signupController, loginController, logoutController } = authControllers;

router.post(SIGN_UP, signupController);
router.post(LOGIN, loginController);
router.post(LOGOUT, logoutController);

export default router;
