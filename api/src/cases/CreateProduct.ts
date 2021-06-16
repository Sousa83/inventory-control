import ResponseError from '../shared/Errors/ResponseError';
import { inject, injectable } from 'tsyringe';
import ProductDTO from '../dtos/ProductDTO';
import IProductRepoisoty from '../repositories/IProductRepository';

@injectable()
export default class CreateProducts {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepoisoty
  ){}

  public async execute(productDTO: ProductDTO): Promise<any> {
    const products = (await this.productRepository.findAll())
      .filter(p => p.name === productDTO.name);

    if(products.length != 0)
      throw new ResponseError(`Already exists a product with this name ${productDTO.name}`);
    
    return await this.productRepository.createProduct(productDTO);
  }
}