<template>
  <q-dialog persistent :value="value">
    <q-card style="width: 350px">
      <q-card-section class="row items-center">
        <q-avatar icon="delete_forever" color="red" text-color="white" />
        <span class="q-ml-sm">Tem certeza que deseja deletar o registro?</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancelar" color="red" v-close-popup @click.prevent="$emit('onCancel')" />
        <q-btn flat label="Sim" color="primary" v-close-popup @click.prevent="$emit('onConfirm')" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean
    }
  }
}
</script>

<style>

</style>
