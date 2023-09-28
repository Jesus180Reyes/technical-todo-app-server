import { Server } from "./server/server";
import {config} from 'dotenv'
config();
const server = new Server();

server.listen();
