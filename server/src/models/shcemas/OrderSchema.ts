import mongoose, { Schema } from "mongoose";
import IOrder from "../interfaces/IOrder";

const orderSchema : Schema<IOrder> = new Schema<IOrder>({
    customerID : {type: String, required: true},
    productsID : [String],
    date: {type: Date}
});

export default mongoose.model('Order',orderSchema);