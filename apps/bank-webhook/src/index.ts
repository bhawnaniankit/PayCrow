import expres, { Request, Response } from "express";
import db from "@repo/db/client"

const app=expres();

app.post("/hdfcWebhook",async (req:Request,res:Response)=>{
     //TODO: Add zod validation here?
     const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };
        
    // Update balance in db, add txn
    db.$transaction([
        db.balance.update({
            where:{
                userId:paymentInformation.userId
            },
            data:{
                amount:{
                    increment:paymentInformation.amount
                }
            }
        }),
        db.onRampTransaction.update({
            where:{
                token:paymentInformation.token
            },
            data:{
                status:"Success"
            }
        })
    ])
    
    res.status(200).json({
        message:"Captured"
    })

})