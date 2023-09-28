import {Request, Response} from 'express'
export const getUsers = async(req:Request, res: Response) =>  {

    res.json({
        ok: true,
        msg: "GET USERS"
    });

}