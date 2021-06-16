import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productRouter = Router()
const productController = new ProductController();

productRouter.get('/products', productController.index);
productRouter.get('/products/:id', productController.show);
productRouter.put('/products/:id', productController.update);
productRouter.delete('/products/:id', productController.delete);
productRouter.post('/products', productController.create);

export default productRouter;