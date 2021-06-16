import { container } from "tsyringe"
import {Request, Response} from 'express'

import ListProducts from "../cases/ListProducts";
import CreateProducts from "../cases/CreateProduct";
import ShowProduct from "../cases/ShowProduct";
import AlterProduct from "../cases/AlterProduct";
import DeleteProduct from "../cases/DeleteProduct";

export default class ProductController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProducts = container.resolve(ListProducts); 
    const products = await listProducts.execute(); 

    return response.json(products);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;

    const showProduct = container.resolve(ShowProduct);
    const product = await showProduct.execute(id);

    return response.json(product);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const productDTO = request.body;

    const createProduct = container.resolve(CreateProducts);
    const product = await createProduct.execute(productDTO);

    return response.json(product);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;
    const productDTO = request.body;

    const updateProduct = container.resolve(AlterProduct);
    const product = await updateProduct.execute(id, productDTO)

    return response.json(product);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;
    
    const deleteProduct = container.resolve(DeleteProduct);
    await deleteProduct.execute(id)

    return response.json({
      "message": "sucess"
    })
  }
}