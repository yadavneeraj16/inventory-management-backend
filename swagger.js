const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Inventory Management API",
      version: "1.0.0",
      description: "API documentation for Inventory Management backend",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        Product: {
          type: "object",
          properties: {
            name: { type: "string" },
            type: { type: "string" },
            sku: { type: "string" },
            image_url: { type: "string" },
            description: { type: "string" },
            quantity: { type: "integer" },
            price: { type: "number" },
          },
          required: ["name", "type", "sku", "quantity", "price"],
        },
      },
    },
    paths: {
      "/login": {
        post: {
          summary: "User login",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    username: { type: "string" },
                    password: { type: "string" },
                  },
                  required: ["username", "password"],
                },
              },
            },
          },
          responses: {
            "200": {
              description: "Successful login",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      token: { type: "string" },
                    },
                  },
                },
              },
            },
            "400": { description: "Missing fields" },
            "401": { description: "Invalid credentials" },
            "500": { description: "Server error" },
          },
        },
      },
      "/products": {
        post: {
          summary: "Add product",
          security: [{ bearerAuth: [] }],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Product" },
              },
            },
          },
          responses: {
            "200": { description: "Product added" },
            "401": { description: "Unauthorized" },
            "500": { description: "Server error" },
          },
        },
        get: {
          summary: "Get products",
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "page",
              in: "query",
              schema: { type: "integer", default: 1 },
            },
          ],
          responses: {
            "200": {
              description: "List of products",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: { $ref: "#/components/schemas/Product" },
                  },
                },
              },
            },
            "401": { description: "Unauthorized" },
            "500": { description: "Server error" },
          },
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
