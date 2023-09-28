import express, { Application } from 'express';

const cors = require('cors');


export  class Server {
    public paths = {
        user: "api/v1/user",
        todo: "api/v1/todo"
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
        // await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

        // Fileupload - Carga de archivos
        // this.app.use( fileUpload({
        //     useTempFiles : true,
        //     tempFileDir : '/tmp/',
        //     createParentPath: true
        // }));

    }

    routes() {
        
        // this.app.use( this.paths.auth, require('../routes/auth'));
       
        
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}



