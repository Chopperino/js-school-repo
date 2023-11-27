import { PrismaClient } from '@prisma/client'

import {Category} from '@prisma/client'

const prisma = new PrismaClient()

class Db {
    async addProduct(name, category, amount, price){
        const product = await prisma.product.create({
            data:{
                name: name,
                category: category,
                amount: amount,
                Price: price
            }
        })
        return product;
    }
    async getProductCategories(){
        return Category;
    }
    async getCustomerOrders(id){
        const orders = await prisma.order.findMany({
            where:{customerId: Number(id)}
        })
        return orders;
    }
    async getOrderProducts(id){
        const products = await prisma.productsInOrders.findMany({
            where:{orderId: Number(id)}
        })
        return products;
    }
    async getProduct(id){
        const product = await prisma.product.findFirst({
            where: {id: id}
        })
        return product;
    }
    async getCustomer(id){
        const customer = await prisma.customer.findUnique({
            where:{id: Number(id)}
        })
        return customer;
    }
    async getEmployee(id){
        const employee = await prisma.employee.findUnique({
            where:{id: Number(id)}
        })
        return employee
    }
    async patchEmployee(id, firstName, lastName, middleName, position){
        const employee = await prisma.employee.update({
            where:{id: Number(id)},
            data:{
                firstName: firstName,
                lastName: lastName,
                middleName: middleName,
                position: position
            }
        })
        return employee;
    }
    async getOrder(id){
        const order = await prisma.order.findUnique({
            where:{id: Number(id)}
        })
        return order
    }
    async deleteOrder(id){
        await prisma.productsInOrders.deleteMany({
            where:{orderId: Number(id)}
        })
        const order = await prisma.order.delete({
            where:{id: Number(id)}
        })
        return order;
    }
}

export default new Db();