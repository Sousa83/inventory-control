import ProductDTO from '../dtos/ProductDTO';
import Product from '../entities/Product';

export default interface IProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product | undefined>;
  createProduct(productDTO: ProductDTO): Promise<Product>;
  saveProduct(Product: Product): Promise<Product>;
  deleteProduct(product: Product): void;
} 
