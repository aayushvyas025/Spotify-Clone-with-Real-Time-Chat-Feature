import { connectWithDatabase } from "../../../config/index.js";
import {Constants} from "../../index.js";

const {envVariables} = Constants;
const {backendPort} = envVariables;

function databaseConnection(app) {
    connectWithDatabase().then(() => {
        app.listen(backendPort, () => {
            console.log(`Your Server Run Successfully on http://localhost:${backendPort}`)
        })
    }).catch((error) => {
        console.error(`Error while connecting with mongodb database:${error?.message}`)

    }).finally(() => {
        console.log(`Successfully connected with mongodb database `)
    })
} 

export default databaseConnection; 