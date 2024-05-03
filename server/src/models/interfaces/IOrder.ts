import { Types } from "mongoose"

export default interface IOrder{
    customerID: string,
    productsID: Types.Array<string>,
    date: Date
}