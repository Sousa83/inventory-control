import { inject, injectable } from "tsyringe";
import IProductRepository from '../repositories/IProductRepository';
import Product from "../entities/Product";
import ProductDTO from "../dtos/ProductDTO";
import ResponseError from "../shared/Errors/ResponseError";

@injectable()
export default class AlterProduct {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ){}

  public async execute(id: string, productDTO: ProductDTO): Promise<Product> {
    const product = await this.productRepository.findById(id);

    if(!product)
      throw new ResponseError(`Cannot be found a product with this id: ${id}`);

    Object.assign(product, productDTO);
    return await this.productRepository.saveProduct(product);
  }
}