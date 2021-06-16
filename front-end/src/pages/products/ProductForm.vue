<template>
  <q-card flat bordered rounded class="card">
    <q-card-section>
      <q-card-section class="bg-primary flex justify-between text-white">
        <div class="text-h6">Produto</div>
        <div class="flex q-gutter-sm">
          <q-btn label="Adicionar" outline @click="emitAdd"/>
          <q-btn label="Fechar" outline @click="emitClose"/>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <div class="col-4">
            <q-item>
              <q-input
                class="full-width"
                label="Nome"
                autofocus
                outlined
                v-model="model.name"
                :error="nameError"
                error-message="Nome indefinido ainda"
              />
            </q-item>
          </div>
          <div class="col-4">
            <q-item>
              <q-input
                class="full-width"
                label="Descrição"
                outlined
                v-model="model.description"
              />
            </q-item>
          </div>
          <div class="col-2">
            <q-item>
              <q-input
                class="full-width"
                label="Preço"
                mask="#.##"
                fill-mask="0"
                reverse-fill-mask
                input-class="text-right"
                outlined
                v-model="model.price"
                :error="priceError"
                error-message="Preço indefinido"
              />
            </q-item>
          </div>
          <div class="col-2">
            <q-item>
              <q-input
                class="full-width"
                label="Quantidade"
                type="number"
                outlined
                v-model="model.quantity"
                :error="quantityError"
                error-message="Quantidade indefinida"
              />
            </q-item>
          </div>
      </div>
      <div class="row"></div>
    </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
import Service from './service/productService'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      model: {},
      nameError: false,
      quantityError: false,
      priceError: false
    }
  },
  async created () {
    if (this.isEdit) {
      this.model = await Service.show(this.productSelectedId)
    } else {
      this.model = {}
    }
  },
  methods: {
    emitClose () {
      this.$emit('closeForm')
    },

    emitAdd () {
      this.nameError = !this.model.name
      this.quantityError = !this.model.quantity
      this.priceError = !this.model.price

      if (!this.nameError && !this.quantityError && !this.priceError) {
        this.$emit('addProduct', this.model)
      }
    }
  },
  computed: {
    ...mapGetters({
      isEdit: 'product/getEdit',
      productSelectedId: 'product/getProductSelectedId'
    })
  }
}
</script>

<style>

</style>
