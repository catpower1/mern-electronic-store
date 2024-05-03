import { Response, Request } from "express";
import ProductService from "../service/db/ProductService";
import logger from "../common/logger";

class ProductController{
    public async product(req : Request,res : Response) : Promise<void>{
        try{
            const prodctId = req.body.id || req.params.id;
            if(!prodctId){
                res.status(400).send("Excepted id");
                return;
            }
            const product = await ProductService.getProduct(prodctId);
            
            if(!product){
                res.status(404).send("Product not found");
                return;
            }
            else{
                res.status(200).send(product);
                return;
            }
        }
        catch(error){
            logger.error("An error occurred while processing the request: ", error);
            res.status(500).send("An error occurred while processing the request");
            return;
        }
    }

    public async products(req : Request, res : Response) : Promise<void>{
        try{
            const page : number = req.body.page || req.params.page;
            if(!page || page < 0){
                res.status(400).send("Incorrect page");
                return;
            }

            const products = await ProductService.getProducts(page);

            if(!products){
                res.status(404).send("Products not found");
                return;
            }
            else{
                res.status(200).send(products);
                return;
            }
        }
        catch(error){
            logger.error("An error occurred while processing the request: ", error);
            res.status(500).send("An error occurred while processing the request");
            return;
        }
    }

    public async getCategories(req : Request, res : Response) : Promise<void>{
        try{
            const categories = await ProductService.getCategories();
            res.status(400).send(categories);
        }
        catch(error){
            logger.error("An error occurred while processing the request: ", error);
            res.status(500).send("An error occurred while processing the request");
            return;
        }
    }

    public async getProuctsByCategories(req : Request, res : Response) : Promise<void>{
        try{
            const categories : string[] = req.body.categories;
            const data = await ProductService.getProductsByCategory(categories);
            res.status(200).send(data);
        }
        catch(error){
            logger.error("An error occurred while processing the request: ", error);
            res.status(500).send("An error occurred while processing the request");
            return;
        }
    }
}

export default new ProductController;