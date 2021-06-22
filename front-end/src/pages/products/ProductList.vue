<template>
  <q-card flat bordered class="card">
    <q-card-section>
      <q-table
        :data="productsFormated"
        :columns="columns"
        virtual-scroll
        title="Produtos"
        row-key="id"
        color="white"
        class="bg-primary text-white sticky-header-table"
        table-class="bg-white text-black "
        table-header-class="bg-white text-black"
        rows-per-page-label="Registros por página"
        :rows-per-page-options="[0]"
      >
        <template v-slot:top-right>
          <q-btn label="Adicionar" outline color="white" icon="add" @click="$emit('openForm')"/>
        </template>
        <template v-slot:body="props">
          <q-tr>
            <q-td key="name">{{ props.row.name }}</q-td>
            <q-td key="description">{{ props.row.description }}</q-td>
            <q-td key="quantity">{{ props.row.quantity }}</q-td>
            <q-td key="state">
              <q-badge
                :label="getBagdeLabel(props.row.quantity)"
                :color="getBagdeColor(props.row.quantity)"
                class="badge"
              />
            </q-td>
            <q-td key="price">{{ props.row.price }}</q-td>
            <q-td key="action">
              <ActionList @onEdit="editProduct(props.row.id)" @onDeletee="deleteProduct(props.row.id)"/>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </q-card-section>
  </q-card>
</template>

<script>
import ActionList from 'components/ActionList.vue'
import { mapActions } from 'vuex'

export default {
  components: { ActionList },
  props: {
    products: []
  },
  data () {
    return {
      pagination: {
        rowsPerPage: 0
      },
      columns: [
        {
          name: 'description',
          label: 'Descrição',
          field: 'description',
          sortable: true,
          align: 'left'
        },
        {
          name: 'name',
          label: 'Nome',
          field: 'name',
          sortable: true,
          align: 'left'
        },
        {
          name: 'quantity',
          label: 'Quantidae',
          field: 'quantity',
          sortable: true,
          align: 'left'
        },
        {
          name: 'state',
          label: 'Situação',
          sortable: true,
          align: 'left'
        },
        {
          name: 'price',
          label: 'Preço (R$)',
          field: 'price',
          sortable: true,
          align: 'left'
        },
        {
          name: 'action',
          label: '',
          field: 'action',
          sortable: false,
          align: 'center'
        }
      ]
    }
  },
  computed: {
    productsFormated () {
      return this.products.map(p => {
        p.price = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(p.price)

        return p
      })
    }
  },
  methods: {
    ...mapActions({
      editProduct: 'product/openEdit',
      deleteProduct: 'product/openDelete'
    }),
    getBagdeColor (quantity) {
      return quantity <= 20 ? 'red' : quantity <= 50 ? 'warning' : 'green'
    },
    getBagdeLabel (quantity) {
      return quantity <= 20 ? '(Crítico)' : quantity <= 50 ? '(Alerta)' : '(Ok)'
    }
  }
}
</script>

<style>
  .badge {
    width: 80px;
  }
  thead, th, tr {
    position: sticky
  }
  .sticky-header-table{
    height: 400px;
  }
</style>
