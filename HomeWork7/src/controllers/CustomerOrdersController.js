import CustomerOrdersService from "../services/CustomerOrdersService.js";

class CustomerOrdersController{
    async get(req, res){
        await CustomerOrdersService.getCustomerOrders(req.params.customerId)
            .then((data) => {res.status(200).json({orders: data[0], totalCost: data[1]})})
            .catch((e) => {res.status(404).send(e)})
    }
}

export default new CustomerOrdersController();