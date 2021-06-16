import Service from 'src/pages/products/service/productService'
import { Notify } from 'quasar'

export default {
  namespaced: true,
  state: {
    openForm: false,
    edit: false,
    delete: false,
    productSelectedId: 0
  },
  getters: {
    getOpenForm (state) {
      return state.openForm
    },
    getEdit (state) {
      return state.edit
    },
    getProductSelectedId (state) {
      return state.productSelectedId
    },
    getDelete (state) {
      return state.delete
    }
  },
  mutations: {
    setOpenForm (state, product) {
      if (!product) { state.openForm = !state.openForm } else { state.openForm = product }
    },
    setEdit (state, product) {
      if (!product) { state.edit = !state.edit } else { state.edit = product }
    },
    setProductSelectId (state, product) {
      state.productSelectedId = product
    },
    setDelete (state, product) {
      if (!product) { state.delete = !state.delete } else { state.delete = product }
    }
  },
  actions: {
    async saveProduct ({ dispatch, state }, product) {
      let response = null

      try {
        if (state.edit) {
          response = await Service.updateAndFinAll(product.id, product)
        } else {
          response = await Service.createAndFinAll(product)
        }

        dispatch('closeForm')

        return response
      } catch (error) {
        Notify.create({
          type: 'negative',
          message: error.response.data.message,
          position: 'top'
        })
      }
    },
    async confirmDelete ({ dispatch, state }) {
      try {
        const response = await Service.deleteAndFindAll(state.productSelectedId)

        dispatch('closeDelete')

        return response
      } catch (error) {
        Notify.create({
          type: 'negative',
          message: error.response.data.message,
          position: 'top'
        })
      }
    },
    closeForm ({ commit }) {
      commit('setOpenForm', false)
    },
    openForm ({ commit }) {
      commit('setOpenForm', true)
    },
    openEdit ({ commit }, product) {
      commit('setProductSelectId', product)
      commit('setOpenForm', true)
      commit('setEdit', true)
    },
    openDelete ({ commit }, product) {
      commit('setProductSelectId', product)
      commit('setDelete', true)
    },
    closeDelete ({ commit }) {
      commit('setDelete', false)
    }
  }
}
