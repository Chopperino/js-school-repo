import db from "../Data/Db.js";

class OrdersService{
    async deleteOrder(id){
        const order = await db.getOrder(id);
        if(order === null) throw 'Order with such id not found';
        return await db.deleteOrder(id);
    }
}

export default new OrdersService();