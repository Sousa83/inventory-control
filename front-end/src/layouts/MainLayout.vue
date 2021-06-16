<template>
  <q-layout view="lHh Lpr lFf" class="bg-dark">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <b>Controle de estoque</b>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout'
}
</script>
