import mongoose from "mongoose";
import { Schema } from "mongoose";
import IProduct from "../interfaces/IProduct";

const productSchema : Schema<IProduct> = new Schema<IProduct>({
    brand: {type: String, required: true},
    model: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    photos: [{ type: String }],
    description: {type: String},
    comments: [{ type: String }]
});

export default mongoose.model('Product',productSchema);