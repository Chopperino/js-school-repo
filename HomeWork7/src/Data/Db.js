import {Category, PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

class Db {
    async addProduct(name, category, amount, price){
        return prisma.product.create({
            data: {
                name: name,
                category: category,
                amount: amount,
                Price: price
            }
        });
    }
    async getProductCategories(){
        return Category;
    }
    async getCustomerOrders(id){
        return prisma.order.findMany({
            where: {customerId: Number(id)}
        });
    }
    async getOrderProducts(id){
        return prisma.productsInOrders.findMany({
            where: {orderId: Number(id)}
        });
    }
    async getProduct(id){
        return prisma.product.findFirst({
            where: {id: id}
        });
    }
    async getCustomer(id){
        return prisma.customer.findUnique({
            where: {id: Number(id)}
        });
    }
    async getEmployee(id){
        return prisma.employee.findUnique({
            where: {id: Number(id)}
        });
    }
    async patchEmployee(id, firstName, lastName, middleName, position){
        return prisma.employee.update({
            where: {id: Number(id)},
            data: {
                firstName: firstName,
                lastName: lastName,
                middleName: middleName,
                position: position
            }
        });
    }
    async getOrder(id){
        return prisma.order.findUnique({
            where: {id: Number(id)}
        });
    }
    async deleteOrder(id){
        await prisma.productsInOrders.deleteMany({
            where:{orderId: Number(id)}
        })
        return prisma.order.delete({
            where: {id: Number(id)}
        });
    }
}

export default new Db();