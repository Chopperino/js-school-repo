import {Router} from "express";
import OrdersController from "../controllers/OrdersController.js";

const OrdersRouter = new Router();

OrdersRouter.delete('/:orderId', OrdersController.deleteOrder);

export default OrdersRouter;