import { Types } from "mongoose"

export default interface IProduct{
    brand: string,
    model: string,
    price: number,
    category: string,
    photos: Types.Array<string>,
    description: string,
    comments: Types.Array<string>
}