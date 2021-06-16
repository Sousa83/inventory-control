import http from 'src/boot/axios'

export default {
  index: async () => {
    return http.get().then(response => response.data).catch(err => err)
  },
  show: async (id) => {
    return http.get(`/${id}`).then(response => response.data)
  },
  update: async (id, productModel) => {
    return http.put(`/${id}`, productModel).then(response => response)
  },
  delete: async id => {
    return http.delete(`/${id}`).then(response => response)
  },
  create: async productModel => {
    return http.post('', productModel).then(response => response)
  }
}
