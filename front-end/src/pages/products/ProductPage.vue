<template>
  <q-card class="card bg-grey-3">
    <ProductForm v-if="formState" @closeForm="closeAndFind" @addProduct="saveAndFind"/>
    <ProductList v-else :products="products" @openForm="openForm"/>
    <DeleteDialog v-model="openDelete" @onCancel="closeDelete" @onConfirm="deleteAndFind"/>
  </q-card>
</template>

<script>
import ProductList from './ProductList.vue'
import ProductForm from './ProductForm.vue'
import DeleteDialog from 'components/Dialogs/DeleteDialog.vue'
import Service from './service/productService'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: { ProductList, ProductForm, DeleteDialog },
  data () {
    return {
      products: []
    }
  },
  async created () {
    this.products = await Service.index()
  },
  computed: {
    ...mapGetters({
      formState: 'product/getOpenForm',
      openDelete: 'product/getDelete'
    })
  },
  methods: {
    ...mapActions({
      openForm: 'product/openForm',
      closeForm: 'product/closeForm',
      closeDelete: 'product/closeDelete',
      saveProduct: 'product/saveProduct',
      confirmDelete: 'product/confirmDelete'
    }),
    async saveAndFind (productModel) {
      this.products = await this.saveProduct(productModel)
    },
    async closeAndFind () {
      this.closeForm()
      this.products = await Service.index()
    },
    async deleteAndFind () {
      this.products = await this.confirmDelete()
    }
  }
}
</script>

<style>
  .card{
    height: 430px;
  }
</style>
