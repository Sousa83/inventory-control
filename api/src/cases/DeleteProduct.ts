import ResponseError from "../shared/Errors/ResponseError";
import { inject, injectable } from "tsyringe";
import IProductRepository from "../repositories/IProductRepository";

@injectable()
export default class DeleteProduct {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}

  public async execute(id: string): Promise<void>{
    const product = await this.productRepository.findById(id);

    if(!product)
      throw new ResponseError(`Cannot be found a product with this id: ${id}`);

    return this.productRepository.deleteProduct(product);
  }
}