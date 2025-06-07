const setupSwagger = require("./swagger");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
setupSwagger(app);
app.use(cors());
app.use(express.json());

app.use("/login", authRoutes);
app.use("/products", productRoutes);

// ✅ 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
