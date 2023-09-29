import { validationResult} from 'express-validator';
import {Request,Response,NextFunction} from 'express';
export const validateFields = (req:Request, res:Response, next:NextFunction) => {
    const errors:any = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors,
            msg:"Validation Error " + errors.errors[0].msg
        });
    }
    next();
}