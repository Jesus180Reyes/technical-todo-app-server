import {Request, Response} from 'express'
export const getTodos = (req:Request, res:Response) => {
    res.json({
        ok: true,
        msg: "TODOs listed "
    })
}
export const getTodo = (req:Request, res:Response) => {
    res.json({
        ok: true,
        msg: "TODO listed "
    })
}

export const postTodo = (req:Request, res:Response) => {
    res.json({
        ok: true,
        msg: "TODO CREATED "
    })
}