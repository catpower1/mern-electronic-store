import express = require("express");
import { Express } from 'express'
import routes from './src/routes/index';
import DbService from "./src/service/db/DbService";
import bodyParser = require("body-parser");
import cors from "cors";
import logger from "./src/common/logger";
import { server } from "./config.json";
import cookieParser = require("cookie-parser");
import https from "https";
import fs from "fs";
import path from "path";

const credentials = {
    key: fs.readFileSync('./sslcert/key.pem', 'utf8'),
    cert: fs.readFileSync('./sslcert/cert.pem', 'utf8'),
    passphrase: server.passphrase
}

DbService.ConnectToDatabase();

const app : Express = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use('/',routes);

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/build/index.html");
})

const port = process.env.PORT || server.port;

https.createServer(credentials,app).listen(port,()=>{
    logger.info("Server running at port " + server.port);
})
