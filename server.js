import express from "express";

// utill
import setupSwagger from "./config/swagger.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/notFound.js";

// router
import userRouter from "./routes/users.js";

// express instance
const app = express();

// env varaibles
const listenPort = process.env.PORT ?? 5000;
const host = process.env.HOST_EXTERNAL ?? "0.0.0.0";

// routes
app.use("/api/users", userRouter);

// Setup Swagger
setupSwagger(app);

// custom error handler
app.use(errorHandler);

// page not found handler
app.use(notFound);

// server listner
app.listen(listenPort, host, () => {
  console.log(`Server running on port ${listenPort}`);
});
