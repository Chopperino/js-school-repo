import ProductsController from '../controllers/ProductsController.js';
import { Router } from 'express';


const ProductsRouter = new Router();

ProductsRouter.post('/', ProductsController.post);

export default ProductsRouter;