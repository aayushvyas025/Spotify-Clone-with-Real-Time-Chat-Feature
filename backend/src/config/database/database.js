import mongoose from "mongoose";
import { Constants } from "../../helper/index.js";

const {envVariables} = Constants; 
const {mongodbUri} = envVariables;


async function connectWithDatabase() {
    try {
        const connectDatabase = await mongoose.connect(mongodbUri);
        console.log(`Successfully connected with mongodb host:${connectDatabase?.connection?.host}`)
    } catch (error) {
        console.error(`Error while connecting and getting host of database ${error?.message}`); 
        process.exit(1);
    }
}

export default connectWithDatabase
