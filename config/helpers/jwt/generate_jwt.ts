import jwt from 'jsonwebtoken';
import {config} from 'dotenv';
config();
export const generateJWT = (uid:number) => {

    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY!, {
            expiresIn: '12h',

        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token');
            } else {
                resolve(token);
            }
        });

    });


}