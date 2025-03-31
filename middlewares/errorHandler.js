const errorHandler = (err, req, res, next) => {
  // Set default error status
  let statusCode = err.status || 500;
  let message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    error: message,
  });
};

export default errorHandler;
