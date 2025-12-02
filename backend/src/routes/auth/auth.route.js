import express from "express";
import { authControllers } from "../../controller/index.js";
import { apiRoutes } from "../../helper/index.js";

const router = express.Router();
const { auth } = apiRoutes;
const {  AUTH_CLERK_CALLBACK } = auth;
const {clerkCallback } = authControllers;

router.post( AUTH_CLERK_CALLBACK, clerkCallback);


export default router;
