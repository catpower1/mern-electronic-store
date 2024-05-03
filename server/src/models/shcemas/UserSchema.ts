import mongoose, { Schema } from "mongoose"
import IUser from "../interfaces/IUser"
import Role from "../../common/role";

const userSchema : Schema<IUser> = new Schema<IUser>({
    userName : {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: Number, required: true, default: Role.User },
    photo: {type: String, default: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"}
});

export default mongoose.model('User',userSchema);