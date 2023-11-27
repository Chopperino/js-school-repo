import express from 'express';
import ProductsRouter from './routers/ProductsRouter.js';
import CustomersRouter from './routers/CustomersRouter.js';
import EmployeesRouter from "./routers/EmployeesRouter.js";
import OrdersRouter from "./routers/OrdersRouter.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use('/products', ProductsRouter);
app.use('/customers', CustomersRouter);
app.use('/employees', EmployeesRouter);
app.use('/orders', OrdersRouter);

app.listen(port, () => {
    console.info(`Server started on 127.0.0.1:${port}`);
});