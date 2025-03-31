import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// Swagger Configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API Docs",
      version: "1.0.0",
      description: "API documentation using Swagger",
    },
    servers: [
      {
        url: process.env.BASE_URL || "localhost:5000",
        description: "Development server",
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to your route files
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Function to setup Swagger
const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
