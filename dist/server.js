"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const orderRoutes_1 = require("./routes/orderRoutes");
const productRoutes_1 = require("./routes/productRoutes");
const userRoutes_1 = require("./routes/userRoutes");
const categoryRoutes_1 = require("./routes/categoryRoutes");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use("/api/order", orderRoutes_1.orderRouter);
app.use("/api/product", productRoutes_1.productRouter);
app.use("/api/category", categoryRoutes_1.categoryRouter);
app.use("/api/user", userRoutes_1.userRouter);
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
