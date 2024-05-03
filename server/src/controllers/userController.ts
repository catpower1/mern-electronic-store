import { Response, Request } from "express";
import UserService from '../service/db/UserService';
import logger from "../common/logger";
import JwtService from "../service/jwt/JwtService";

class UserController{
    public async getUser(req : Request, res : Response) : Promise<void>{
        //Отримання токена через header та перевірка на валідність
        try{
            const userId = req.body.id || req.params.id;
            if(!userId){
                res.status(400).send("Excepted id");
                return;
            }
            const user = await UserService.getUser(userId);
            
            if(!user){
                res.status(404).send("User not found");
                return;
            }
            else{
                res.status(200).send(user);
                return;
            }
        }
        catch(error){
            logger.error("An error occurred while processing the request: ", error);
            res.status(500).send("An error occurred while processing the request");
            return;
        }
    }

    public async login(req : Request, res : Response) : Promise<void>{
        try{
            const { username, password } = req.body || req.params;
            const isPresent = await UserService.isUserPresent({username,password});
            if(isPresent){
                const token = JwtService.sign({ username, password });
                res.cookie('token',token,{path : "/", secure: true, httpOnly: true});
                res.status(200).send(token); //{token,name}
            }
            else {
                res.status(400).send("Incorrect username or password");
            }
        }
        catch(error){
            logger.error("An error occurred while processing the request: ", error);
            res.status(500).send("An error occurred while processing the request");
        }
    }

    public async authenticate(req : Request, res : Response) : Promise<void>{
        try {
            if (req.cookies.token) {
                const token = req.cookies.token;
                if (!JwtService.authenticateToken(token)) {
                    res.status(403).send('Invalid token');
                } else {
                    res.status(200).send(token);
                }
            } else if(req.cookies.token === undefined) {
                res.status(403).send('Token cookie is missing');
            }
        } catch (error) {
            logger.error("An error occurred while processing the request: ", error);
            res.status(500).send("An error occurred while processing the request");
        }
    }

    public async logout(req : Request, res : Response) : Promise<void>{
        res.clearCookie('token', {path: "/"});
        res.status(200).send("ok");
    }
}

export default new UserController;