import {Router} from 'express';
import EmployeesController from "../controllers/EmployeesController.js";

const EmployeesRouter = new Router();

EmployeesRouter.patch('/:employeeId', EmployeesController.patch);

export default EmployeesRouter;