
import * as express from "express"; 
import {getAllCategories,postCategory,getCategoryById,updateCategoryById,deleteCategoryById} from "../controllers/categoryController"
export const categoryRouter = express.Router();

// Routes for all request for
categoryRouter.route("/").get(getAllCategories).post(postCategory)
categoryRouter.route("/:id").get(getCategoryById).put(updateCategoryById).delete(deleteCategoryById)




