import {container} from 'tsyringe';

import IProductRepository from '../../repositories/IProductRepository';
import ProductRepository from '../../repositories/implementations/ProductRepository';

container.register<IProductRepository>('ProductRepository', ProductRepository);