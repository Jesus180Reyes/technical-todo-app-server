import {Request, Response} from 'express'
import { prisma } from '../../config/prisma/prisma_client'
export const getTodos = async(req:Request, res:Response) => {
    const todos = await prisma.todos.findMany();
    res.json({
        ok: true,
        todos,
    })
}
export const getTodo =  async(req:Request, res:Response) => {
    const {id} = req.params;
    const todos = await prisma.todos.findUnique({where: {id: Number(id)}});

    res.json({
        ok: true,
        todos,
    })
}

export const postTodo = async(req:Request, res:Response) => {
   try {
    const {body} = req;
    const todo  = await prisma.todos.create({
        data: body
    }) 
    res.json({
        ok: true,
        msg: "Todo created Succesfully ",
        todo,
    })
   } catch (error) {
    return res.status(500).json({
        ok: false,
        msg: `Hable con el administrador: ${error} `
    });
    
   }
}