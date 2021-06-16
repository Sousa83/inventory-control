<template>
  <q-btn icon="more_vert" size="md" class="q-mr-sm" flat dense>
    <q-menu
      transition-show="jump-down"
      transition-hide="jump-up"
      anchor="bottom left"
      self="top middle"
    >
      <q-list style="min-widt: 100px">
        <q-item clickable @click="onEdit()">
          <q-item-section avatar>
            <q-icon name="edit" color="warning" />
          </q-item-section>
          <q-item-section avatar>Editar</q-item-section>
        </q-item>
        <q-separator inset />
        <q-item clickable @click="onDeletee()">
          <q-item-section avatar>
            <q-icon name="delete" color="red" />
          </q-item-section>
          <q-item-section avatar>Deletar</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script>

export default {
  methods: {
    onEdit () {
      this.$emit('onEdit')
    },
    onDeletee () {
      this.$emit('onDeletee')
    }
  }
}
</script>

<style>

</style>
