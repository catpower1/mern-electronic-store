import mongoose from "mongoose";
import IOrder from "../../models/interfaces/IOrder";
import OrderModel from "../../models/shcemas/OrderSchema";
import logger from "../../common/logger";

class OrderService{
    private Order : mongoose.Model<IOrder> = OrderModel;

    public async getOrder(orderId : string) : Promise<IOrder | null>{
        try{
            if(!mongoose.Types.ObjectId.isValid(orderId)) return null;
            const id = new mongoose.Types.ObjectId(orderId);
            const order : IOrder | null = await this.Order.findById(id);
            return order;
        }
        catch(error){
            logger.error("An error occurred while receiving the order: " + error);
            return null;
        }
    }
    public async getUserOrders(userId : string) : Promise<IOrder[] | null>{
        try{
            if(!mongoose.Types.ObjectId.isValid(userId)) return null; 
            const id = new mongoose.Types.ObjectId(userId);
            const userOrders : IOrder[] | null = await this.Order.find({ customerID : id })
            return userOrders;
        }
        catch(error){
            logger.error("An error occurred while receiving the order: " + error);
            return null;
        }
    }
}

export default new OrderService;