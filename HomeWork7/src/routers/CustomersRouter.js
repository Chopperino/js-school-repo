import {Router} from 'express';
import CustomerOrdersController from '../controllers/CustomerOrdersController.js';

const CustomersRouter = new Router();

CustomersRouter.get('/:customerId/orders', CustomerOrdersController.get);

export default CustomersRouter;