import {Request, Response} from 'express'
import { prisma } from '../../config/prisma/prisma_client';
import bycrypt from 'bcryptjs';
import { findUserById } from '../../config/helpers/user/findUserById';
export const getUsers = async(req:Request, res: Response) =>  {
    const user = await prisma.users.findMany({
        select: {
            id: true,
            nombre: true,
            email: true,
            todosCompleted: true,
            state: true,
            createdAt: true,
        }
    });
    res.json({
        ok: true,
        user
    });

}
export const getUserById = async(req:Request, res: Response) =>  {
    const {id} = req.params;
    const user = await findUserById(Number(id));
    if(!user) {
      return  res.status(404).json({
            ok: true,
            msg: "Usuario no existe"
        })
    }
    res.json({
        ok: true,
        user
    });

}
export const createUser = async(req:Request, res: Response) =>  {
    try {
        const {body} = req;
        const salt = bycrypt.genSaltSync();
        body.password = bycrypt.hashSync(body.password, salt);
        const user = await prisma.users.create({
        data: body
    });
    res.json({
        ok: true,
        user
    });
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg: `Hable con el administrador: ${error} `
        })
    }

}

