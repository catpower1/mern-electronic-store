import mongoose from "mongoose";
import UserModel from '../../models/shcemas/UserSchema';
import IUser from "../../models/interfaces/IUser";

class UserService{
    private User : mongoose.Model<IUser>;
    constructor(){
        this.User = UserModel;
    }
    public async getUser(userId : string) : Promise<IUser | null>{
        try{
            if(!mongoose.Types.ObjectId.isValid(userId)) return null;
            const id = new mongoose.Types.ObjectId(userId);
            const user : IUser | null = await this.User.findById(id);
            return user;
        }
        catch(error){
            console.error("An error occurred while receiving the user: " + error);
            return null;
        }
    }

    public async addUser(userData : any) : Promise<boolean>{
        try{
            const { userName , email, password, photo } = userData;
            await this.User.create({
                userName : userName,
                email : email,
                password : password,
                photo :  photo
            });
            return true;
        }
        catch(error){
            console.error("An error occurred while adding a user: " + error);
            return false;
        }
    }

    public async isUserPresent({ username, password }: { username: string, password: string }) : Promise<boolean | null>{
        try{
            const user : any = await UserModel.findOne({userName : username},{password : 1});
            if(user && user.password === password){
                return true;
            }
            return false;
        }
        catch(error){
            console.error("An error occurred while cheking a user: " + error);
            return false;
        }
    }
}

export default new UserService;