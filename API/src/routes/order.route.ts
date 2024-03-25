import { Router } from "express";
import OrderController from "../controllers/order.controller";


class OrderRoutes {
  router = Router();
  controller = new OrderController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
     // Create a new Order
     this.router.post("/penjualan", this.controller.create);
     // Get order detail
     this.router.get("/penjualan/:id", this.controller.getDetailOrder);
  }
}

export default new OrderRoutes().router;