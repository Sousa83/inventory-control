import { injectable } from 'tsyringe';
import { getConnection, getRepository, Repository } from 'typeorm';
import ProductDTO from '../../dtos/ProductDTO';
import Product from '../../entities/Product';
import IProductRepository from '../IProductRepository';

@injectable()
export default class ProductRepository implements IProductRepository{
  private repository: Repository<Product>
  
  constructor(){
  	this.repository = getRepository(Product);
  }

  public async findAll(): Promise<Product[]> {
    const products = await this.repository.find();

    return products;
  }

  public async findById(id: string): Promise<Product | undefined> {
    const product = await this.repository.findOne(id);

    return product;
  }
  
  public async createProduct(productDTO: ProductDTO): Promise<Product> {
    const product = getConnection().transaction(async  () => {
      const productCreate = this.repository.create({
        ...productDTO  
      })
      
      await this.repository.save(productCreate);
      return productCreate;
    })

    return product;
  }

  public async saveProduct(product: Product): Promise<Product> {
    return await this.repository.save(product);
  }

  public async deleteProduct(product: Product) {
    return await this.repository.delete(product);
  }
}