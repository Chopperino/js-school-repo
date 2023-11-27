import db from '../Data/Db.js'

class CustomerOrdersService{
    async getCustomerOrders(id){
        const customer = await db.getCustomer(id);
        if(customer === null) throw 'Customer with such id not found';
        const orders = await db.getCustomerOrders(id);
        let totalCost;
        let grandTotalCost = 0;
        for (let i = 0; i < Object.keys(orders).length; i++) {
            totalCost = 0;
            let products = await db.getOrderProducts(orders[i].id);
            for (let j = 0; j < Object.keys(products).length; j++) {
                let product = await db.getProduct(products[j].productId)
                totalCost += (product.Price * products[j].amount);
            }
            grandTotalCost += totalCost + orders[i].deliveryCost;
            orders[i].totalCost = totalCost;
        }
        return [orders, grandTotalCost];
    }
}

export default new CustomerOrdersService();