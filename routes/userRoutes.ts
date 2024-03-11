
import * as express from "express"; 
import {getAllUsers,getUserById,postUser,deleteUserById,updateUserById} from "../controllers/userController"
export const userRouter = express.Router();

// Routes for all request for
userRouter.route("/").get(getAllUsers).post(postUser);
userRouter.route("/:id").get(getUserById).put(updateUserById).delete(deleteUserById);




