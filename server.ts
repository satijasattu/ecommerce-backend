import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { orderRouter } from "./routes/orderRoutes";
import { productRouter } from "./routes/productRoutes";
import { userRouter } from "./routes/userRoutes";
import { categoryRouter } from "./routes/categoryRoutes";
import { orderSchemaValidator } from "./middleware/orderSchemaValidator";
import { productSchemaValidator } from "./middleware/productSchemaValidator";
import { categorySchemaValidator } from "./middleware/catorySchemaValidator";
import { userSchemaValidator } from "./middleware/userSchemaValidator";


dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/api/order",orderSchemaValidator,orderRouter);
app.use("/api/product",productSchemaValidator,productRouter);
app.use("/api/category",categorySchemaValidator,categoryRouter);
app.use("/api/user",userSchemaValidator,userRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

