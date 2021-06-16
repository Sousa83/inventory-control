import Product from '../entities/Product';
import IProductRepository from '../repositories/IProductRepository'

import {inject, injectable} from 'tsyringe';

@injectable()
export default class ListProducts {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ){}

  public async execute(): Promise<Product[]> {
    const products = await this.productRepository.findAll();

    return products;
  }
}