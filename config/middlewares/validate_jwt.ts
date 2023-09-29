import {NextFunction, Request, Response} from 'express'
import jwt from 'jsonwebtoken';
import {config} from 'dotenv'
config();
export const validarJWT = async (req:Request, res:Response, next: NextFunction) => {

    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        jwt.verify(token, process.env.SECRETORPRIVATEKEY! );


        next();

    } catch (error) {
        console.log(error);

        return res.status(401).json({
            ok:false,
            msg: 'Token no valido',

        });
    }




}
