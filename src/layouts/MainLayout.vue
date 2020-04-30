<template>
  <q-layout view="lHh Lpr lFf">
    <q-header unelevated>
      <q-toolbar class="bg-green">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Aplikasi Inventori Barang
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>
        <q-item clickable active-class="active" exact v-ripple :to="{name: 'dashboard'}">
        <q-item-section avatar>
          <q-icon name="dashboard" />
        </q-item-section>

        <q-item-section>
         Stok Barang
        </q-item-section>
        </q-item>
        <q-item clickable active-class="active" exact v-ripple :to="{name: 'input'}">
        <q-item-section avatar>
          <q-icon name="input" />
        </q-item-section>

         <q-item-section>
         Input Barang
        </q-item-section>
        </q-item>
        <q-item clickable active-class="active" exact v-ripple :to="{name: 'keluar'}">
        <q-item-section avatar>
          <q-icon name="keluar" />
        </q-item-section>


        <q-item-section>
          Barang Keluar
        </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout', 

  data () {
    return {
      leftDrawerOpen: false,
    }
  }
}
</script>
