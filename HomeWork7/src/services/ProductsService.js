import db from '../Data/Db.js';

class ProductsService{
    async post(name, category, amount, price){
        const categories = await db.getProductCategories();
        if(!Object.keys(categories).includes(category)) throw "Invalid product category";
        return await db.addProduct(name, category, amount, price);
    }
}

export default new ProductsService();