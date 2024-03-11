
import * as express from "express"; 
import {getAllOrders,postOrder,updateOrderById,getOrderById,deleteOrderById} from "../controllers/orderController"
export const orderRouter = express.Router();

// Routes for all request for
orderRouter.route("/").get(getAllOrders).post(postOrder)
orderRouter.route("/:id").get(getOrderById).put(updateOrderById).delete(deleteOrderById)




