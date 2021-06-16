<template>
  <q-page>
    <div class="row q-my-lg">
      <div class="col-7 q-ml-lg">
        <ProductPage />
      </div>
      <div class="col-4 q-ml-xl">
        <InfoCard />
      </div>
    </div>
  </q-page>
</template>

<script>
import InfoCard from 'components/InfoCard.vue'
import ProductPage from './products/ProductPage.vue'

export default {
  name: 'PageIndex',
  components: { InfoCard, ProductPage }
}
</script>
