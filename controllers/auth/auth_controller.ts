import {Request, Response} from 'express';
import { prisma } from '../../config/prisma/prisma_client';
import bycrypt from 'bcryptjs';
export const authLogin = async(req: Request, res: Response) => {
    const {body} = req;
    const user = await prisma.users.findUnique({
        where: {
            email: body.email
        },
      
    }
    );
    if(!user) {
        return res.status(404).json({
            ok: true,
            msg: "Usuario no existe con ese correo"
        })
    }
    const validPassword =  bycrypt.compareSync(body.password, user!.password);
    if(!validPassword) {
        return res.status(401).json({
            ok:false,
            msg: "Password Incorrect"
        });
    }

    res.json({
        ok: true,
        user,
    });
}