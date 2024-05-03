import mongoose from "mongoose";
import ProductModel from "../../models/shcemas/ProductSchema";
import IProduct from "../../models/interfaces/IProduct";
import logger from "../../common/logger";

class ProductService{
    private Product : mongoose.Model<IProduct>;
    constructor(){
        this.Product = ProductModel;
    }
    public async getProduct(productId : string) : Promise<IProduct | null> {
        try{
            if(!mongoose.Types.ObjectId.isValid(productId)) return null;
            const id = new mongoose.Types.ObjectId(productId);
            const product : IProduct | null = await this.Product.findById(id);
            return product;
        }
        catch(error){
            logger.error("An error occurred while receiving the product: " + error);
            return null;
        }
    }

    public async getProducts(page : number) : Promise<IProduct[] | null>{
        try{
            const products : IProduct[] | null = await this.Product.find().skip((page - 1) * 9).limit(9);
            //{id,brand,model,price,photos[0]}
            return products;
        }
        catch(error){
            logger.error("An error occurred while receiving the product: " + error);
            return null;
        }
    }

    public async getProductsByCategory(categories  : string[]) : Promise<IProduct[] | null>{
        try{
            if(!categories) return null;
            const products : IProduct[] | null = await this.Product.find({category : { $in : categories }});
            //{id,brand,model,price,photos[0]}
            return products;
        }
        catch(error){
            logger.error("An error occurred while receiving the product: " + error);
            return null;
        }
    }

    public async getCategories(): Promise<string[] | undefined>{
        try{
            const res : string[] = await this.Product.aggregate([
                {
                    $group: {
                        _id: null,
                        uniqueCategories: { $addToSet: "$category" }
                    }
                }
            ]).then(res => res[0].uniqueCategories);
            
            return res;
        }
        catch(error){
            logger.error("An error occurred while receiving the product: " + error);
        }
    }
}

export default new ProductService();