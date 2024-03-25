import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default class orderController{
    async create(req :Request, res: Response) {
        try{
            const{CustId, total_order, discount} = req.body;
            const result= await prisma.order.create({
                data:{
                    totalOrder: total_order,
                    discount: discount,
                    customer: {
                        connect:{
                        custId: CustId
                    }
                }
                }
            });
            res.status(201).json(result);
        }catch(error){
            res.status(500).json({
                message: "Server Error!",
            });
        }
    }
    getDetailOrder(req: Request, res: Response) {
        try {
            const orderId = parseInt(req.params.id);
            const detailOrder = prisma.detailOrder.findMany({
                where: {
                    OrderId: orderId,
                },
                include:{
                    order : true,
                    product: true
                }
            });
            if(detailOrder){
                res.status(200).json(detailOrder);
            }else{
                res.status(200).json({message:"Detail Order Tidak ditemukan!"});
            }
            }catch(error){
                console.error(error);
                res.status(500).json({
                    message: "Server Error!"
            });
            }
        }
}
