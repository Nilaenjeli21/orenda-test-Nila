import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default class ProductController {
  async create(req: Request, res: Response) {
    try {
      const { name, unit, price } = req.body;
      const result = await prisma.product.create({
        data: { name, unit, price },
      });
      res.status(201).json({
        message: "Product Created!",
        result,
      });
    } catch (error) {
      res.status(500).json({
        message: "Server Error!",
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const result = await prisma.product.findMany();
      res.status(200).json({
        message: "FindAll Ok",
        result,
      });
    } catch (error) {
      res.status(500).json({
        message: "Server Error!",
      });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await prisma.product.findUnique({
        where: { productId: Number(id) || undefined },
      });
      res.status(200).json({
        message: "FindOne Ok",
        result,
      });
    } catch (error) {
      res.status(500).json({
        message: "Server Error!",
      });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, unit, price } = req.body;
      const updatedPost = await prisma.product.update({
        where: { productId: Number(id) || undefined },
        data: { name, unit, price },
      });

      res.status(200).json({
        message: "Update Ok",
        updatedPost,
      });
    } catch (error) {
      res.status(500).json({
        message: "Server Error!",
      });
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleteProduct = await prisma.product.delete({
        where: { productId: Number(id) || undefined },
      });
      res.status(200).json({
        message: "Delete Ok",
        deleteProduct,
      });
    } catch (error) {
      res.status(500).json({
        message: "Server Error!",
      });
    }
  }
}
