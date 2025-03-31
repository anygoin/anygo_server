import express from "express";

// controllers
import { getUsers } from "../controller/users.js";

// async handler
import asyncHandler from "../middlewares/asyncHandler.js";

const userRouter = express.Router();

// routes
userRouter.get("/", asyncHandler(getUsers));

export default userRouter;
