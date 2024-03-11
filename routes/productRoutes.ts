
import * as express from "express"; 
import {getAllProducts,getProductById,postProduct,deleteProductById,updateProductById} from "../controllers/productController"
export const productRouter = express.Router();

// Routes for all request for
productRouter.route("/").get(getAllProducts).post(postProduct)
productRouter.route("/:id").get(getProductById).put(updateProductById).delete(deleteProductById)




