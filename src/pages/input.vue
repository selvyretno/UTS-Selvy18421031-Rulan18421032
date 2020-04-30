<template>
    <q-page padding>
     <q-card flat>
         <q-card-section class="q-gutter-md">
             <div class="text-h5">Input Barang</div>
             <q-form
                  @submit="onSubmit"
                  @reset="onReset"
                  class="q-nt-lq"
                  >
                  <div class="q-gutter-md">
                  <q-input label="Merk Barang" v-model="Merk" filled :rules="[ val => val && val.length > 0 || 'Tolong Isi Merk']"></q-input>
                  <q-input label="Kode Barang" v-model="Kode" filled :rules="[ val => val && val.length > 0 || 'Tolong Isi Kode']"></q-input>
                  <q-input label="Jumlah Barang" v-model="Jumlah" filled :rules="[ val => val && val.length > 0 || 'Tolong Isi Jumlah']"></q-input>
                  <q-btn type="submit" label="Input" color="green" unelevated></q-btn>
                  <q-btn type="reset" label="Reset" color="green" flat unelevated></q-btn>
                  </div>
             </q-form>
         </q-card-section>
      </q-card>
    </q-page>
</template>
<script>
export default {
    data () {
      return {
         merk: null,
         kode: null,
         jumlah: null
    }
    },
    methods: {
        onReset () {
        this.merk = null
        this.kode = null
        this.jumlah = null
        },
        onSubmit () {
         this.$q.notify({
          type: 'positive',
          message: 'Berhasil Input Barang'
        })
        this.$router.push({ name: 'dashboard' })
        }
    }
    }
</script>
