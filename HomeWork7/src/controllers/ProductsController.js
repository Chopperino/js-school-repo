import ProductsService from '../services/ProductsService.js'

class ProductsController{
    async post(req, res){
        const {name, category, amount, price} = req.body;
        await ProductsService.post(name, category, amount, price)
            .then((data) => {res.status(201).json({ data })})
            .catch((e) => {res.status(403).send(e)});
    }
}

export default new ProductsController();