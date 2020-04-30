<template>
  <q-page class="bg-light-green-13">
    <div class ="row">
      <q-card class ="fixed-center col-md-4 col-xs-12 bg-white">
        <q-card-section>
          <div class ="text-h6 q-pb-md">
          Aplikasi Inventori
          </div>
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="username"
              label="Username Anda"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Tolong Ketik Username']"
            />

            <q-input
              filled
              type="password"
              v-model="password"
              label="Password Anda"
              lazy-rules
              :rules="[
                val => val !== null && val.length > 0 || 'Password Tidak Boleh Kosong'
              ]"
            />
            <div class="q-gutter-md">
              <q-btn label="Submit" type="submit" color="primary"/>
              <q-btn label="Register" to="/register" flat color="primary"/>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
      if (this.username === 'selvy' && this.password === '18421031') {
        this.$q.notify({
          type: 'positive',
          message: 'Berhasil Login'
        })
        this.$router.push('/home')
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'Gagal Login'
        })
      }
    },
    onReset () {
      console.log('Ini fungsi Reset')
    }
  }
}
</script>
