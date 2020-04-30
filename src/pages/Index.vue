<template>
  <q-page padding>
     <q-table
      title="Stok Barang"
      :data="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="Merk" :props="props">
            {{ props.row.Merk }}
          </q-td>
          <q-td key="Kode" :props="props">
            {{ props.row.Kode }}
          </q-td>
          <q-td key="Jumlah" :props="props">
           {{ props.row.Jumlah }}
            <div class="col">
             <q-btn label="Edit" color="orange" icon="edit" unelevated></q-btn>
           <div class="col">
             <q-btn label="Hapus" color="negative" icon="delete" unelevated></q-btn>
           </div>
           </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      columns: [
        {
          name: 'Merk',
          required: true,
          label: 'Merk',
          align: 'left',
          field: 'Merk',
          sortable: true
        },
        { name: 'Merk', align: 'center', label: 'Merk', field: 'Merk', sortable: true },
        { name: 'Kode', label: 'Kode', align: 'center', field: 'Kode', sortable: true },
        { name: 'Jumlah', label: 'Jumlah', field: 'Jumlah', field: 'Jumlah' , sortable: true }
      ],  
      data: [
        {
          Merk: 'AC SANEX',
          Kode: 'AC22',
          Jumlah: '1000'
        },
         {
          Merk: 'Kulkas Aqua',
          Kode: 'Kulkas33',
          Jumlah: '1000'
        }
       
      ]
       
    }
  }
}
</script>
