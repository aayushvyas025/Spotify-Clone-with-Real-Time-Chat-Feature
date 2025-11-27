import express from "express" 
import { databaseConnection } from "./src/helper/index.js";
import { commonMiddleware } from "./src/middleware/index.js";


const app = express();  
const {jsonParser, corsConnection} = commonMiddleware;
jsonParser(app,express);
corsConnection(app);

databaseConnection(app);