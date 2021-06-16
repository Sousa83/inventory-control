import api from '../api/productApi'

class ProductService {
  constructor (api) {
    this.api = api
  }

  async index () {
    const response = Object.assign([{}], await this.api.index())
    return response
  }

  async show (id) {
    return await this.api.show(id)
  }

  async createAndFinAll (productModel) {
    await this.api.create(productModel)
    return await this.index()
  }

  async updateAndFinAll (id, productModel) {
    await this.api.update(id, productModel)
    return await this.index()
  }

  async deleteAndFindAll (id) {
    await this.api.delete(id)
    return await this.index()
  }
}

export default Object.freeze(new ProductService(api))
