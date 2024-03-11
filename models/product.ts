import { Category } from "./category";

export class Product {
    public productId ?: String;
    public productName?: String;
    public productDescription ?: String;
    public productCategory ?: Category;
    public productPrice ?: Number;
}