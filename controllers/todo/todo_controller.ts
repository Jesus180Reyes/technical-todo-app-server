import {Request, Response} from 'express'
import { prisma } from '../../config/prisma/prisma_client'
import { editTodoByStatus } from '../../config/helpers/todo/edit_todo_by_status';
import { findStatusById } from '../../config/helpers/todo/findStatusById';
export const getTodos = async(req:Request, res:Response) => {
    const todos = await prisma.todos.findMany({where: {state: true}});
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
    const todos  = await prisma.todos.create({
        data: body
    }) 
    res.json({
        ok: true,
        msg: "Todo created Succesfully ",
        todos,
    })
   } catch (error) {
    return res.status(500).json({
        ok: false,
        msg: `Hable con el administrador: ${error} `
    });
    
   }
}


export const editTodoStatus = async(req:Request, res:Response) => {
   try {
    const {status, id} = req.body;
    const isTodoExists = await findStatusById(id);
    if(!isTodoExists) {
        return res.status(404).json({
            ok: false,
            msg: "TODO no existe con este ID"
        });
    }
    const todos = await editTodoByStatus(status,id);

    res.json({
        ok: true,
        msg: "Todo Updated Succesfully",
        todos,
    });
   
   } catch (error) {
    return res.status(500).json({
        ok: false,
        msg: `Hable con el administrador: ${error} `
    });
    
   }
}


export const getTodosByStatus = async(req:Request, res:Response) => {
   try {
    const {status} = req.params;

    const todos = await prisma.todos.findMany({where: {status: status,state: true}})

    res.json({
        ok: true,
        todos,
    });
   

   } catch (error) {
    return res.status(500).json({
        ok: false,
        msg: `Hable con el administrador: ${error} `
    });
    
   }
}

export const deleteTodoById = async(req:Request, res:Response) => {
   try {
    const {id} = req.params;
    const isTodoExists = await findStatusById(Number(id));
    if(!isTodoExists) {
        return res.status(404).json({
            ok: false,
            msg: "TODO no existe con este ID"
        });
    }
    const todos = await prisma.todos.update({where: {
        id: Number(id)
    },
    data: {
        state: false,
    }  
})

    res.json({
        ok: true,
        todos,
    });
   

   } catch (error) {
    return res.status(500).json({
        ok: false,
        msg: `Hable con el administrador: ${error} `
    });
    
   }
}
export const getTodoByUserId = async(req:Request, res:Response) => {
   try {
    const { user_id,status } = req.params;
    const isTodoExists = await findStatusById(Number(user_id));
    if(!isTodoExists) {
        return res.status(404).json({
            ok: false,
            msg: "TODO no existe con este ID"
        });
    }
    const todos = await prisma.todos.findMany({where: {
        user_id: Number(user_id),
        state: true,
        status: status
        
    }})

    res.json({
        ok: true,
        todos,
    });
   

   } catch (error) {
    return res.status(500).json({
        ok: false,
        msg: `Hable con el administrador: ${error} `
    });
    
   }
}