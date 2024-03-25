import { Request, Response, request, response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class CustomerController {
  async create(req: Request, res: Response) {
    try {
      const { name, phone, email, address } = req.body;
      const result = await prisma.customer.create({
        data: {
          name,
          phone,
          email,
          address,
        },
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({
        message: "Server Error!",
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const result = await prisma.customer.findMany();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({
        message: "Server Error!",
      });
    }
  }
  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await prisma.customer.findUnique({
        where: { custId: Number(id) || undefined },
      });
      res.status(500).json(result);
    } catch (error) {
      res.status(500).json({
        message: "Server Error!",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, phone, email, address } = req.body;
      const updateCustomer = await prisma.customer.update({
        where: { custId: Number(id) },
        data: {
          name,
          phone,
          email,
          address,
        },
      });
      res.status(200).json(updateCustomer);
    } catch (error) {
      res.status(500).json({
        message: "Server Error!",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleteCustomer = await prisma.customer.delete({
        where: { custId: Number(id) },
      });
      res.status(200).json(deleteCustomer);
    } catch (error) {
      res.status(500).json({
        message: "Server Error!",
      });
    }
  }
}
