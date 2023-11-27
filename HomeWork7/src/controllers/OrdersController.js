import OrdersService from "../services/OrdersService.js";

class OrdersController{
    async deleteOrder(req, res){
        await OrdersService.deleteOrder(req.params.orderId)
            .then((data) => res.status(200).json({ data }))
            .catch((e) => res.status(404).send(e))
    }
}

export default new OrdersController();