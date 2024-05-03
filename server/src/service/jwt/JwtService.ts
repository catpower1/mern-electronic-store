import jwt from "jsonwebtoken";
import logger from "../../common/logger";

class JwtService{
    public sign(data : any) : string | null{
        const token = jwt.sign(data ,'secret',{ expiresIn: '24h' });
        return token;
    }

    public authenticateToken(token: string): boolean {
        if (token === undefined) return false;
        try {
            const user = jwt.verify(token, 'secret');
            //написати Перевірку на наявність user та коректність даних
            return true;
        } catch (error) {
            logger.error("JWT verification error:", error);
            return false;
        }
    }
}

export default new JwtService;