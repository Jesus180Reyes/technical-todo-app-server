import {Request, Response} from 'express';
export const authLogin = (req: Request, res: Response) => {


    res.json({
        ok: true,
        msg: "AUTH CONTROLLER"
    });
}