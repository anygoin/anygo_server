import express from "express";

// utill
import errorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/notFound.js";

// router
import userRouter from "./routes/users.js";

// express instance
const app = express();

// env varaibles
const listenPort = process.env.PORT ?? 8000;

// routes
app.use("/api/users", userRouter);

// custom error handler
app.use(errorHandler);

// page not found handler
app.use(notFound);

// server listner
app.listen(listenPort, (err) => {
  console.log(`Server running on port ${listenPort}`);
});
