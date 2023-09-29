import express, { Application } from 'express';
import cors from 'cors';
import user from '../routes/user/user.routes';
import todo from '../routes/todo/todo.routes';
import auth from '../routes/auth/auth.routes';
import { dbConnection } from '../config/db/dbConnection';
import {config} from 'dotenv';

config();
export  class Server {
    public paths = {
        user: "/api/v1/user",
        todo: "/api/v1/todo",
        auth: "/api/v1/auth",
    };
    public app:Application;
    public port:string

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || "8080";

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {

        this.app.use( this.paths.user, user);
        this.app.use( this.paths.todo, todo);
        this.app.use( this.paths.auth, auth);
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server is running on port', this.port );
        });
    }

}



