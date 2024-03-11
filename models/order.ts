import { Product } from "./product";

export class Order {

    public orderId?: String;
    public userId ?: String;
    public shipmentAddress?: String;
    public productDetails?: Product [];
    public modeOfPayment ?: String;
    public orderSKU ?: String;



}