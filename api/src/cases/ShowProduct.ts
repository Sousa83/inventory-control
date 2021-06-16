import Product from "../entities/Product";
import IProductRepository from "../repositories/IProductRepository";
import { inject, injectable } from "tsyringe";
import ResponseError from "../shared/Errors/ResponseError";

@injectable()
export default class ShowProduct {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ){}

  public async execute(id: string): Promise<Product> {
    const product = await this.productRepository.findById(id);

    if(!product)
      throw new ResponseError(`Cannot be found a product with this id: ${id}`);

    return product;
  }
}