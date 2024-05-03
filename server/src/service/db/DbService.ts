import  mongoose from "mongoose";
import logger from "../../common/logger";
import { database } from "../../../config.json";

class DbService {
    public readonly host : string = database.host;
    public readonly port : number = database.port;
    public readonly dbName : string = database.databaseName;

    public async ConnectToDatabase(): Promise<void>{
        await mongoose.connect(`mongodb://${this.host}:${this.port}/${this.dbName}`)
        .then(()=>{
                logger.info(`Connected to ${this.dbName}`);
            }
        )
        .catch((error)=>{
                logger.error(`Error connect to ${this.dbName}`);
                throw(error);
            }
        )
    }
}

export default new DbService;