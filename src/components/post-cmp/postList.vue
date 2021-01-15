<template>
  <q-page>
    <div class="row q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        selection="single"
        row-key="name"
        :selected.sync="selected"
      >
       <template v-slot:header="props">
         <q-tr :props="props">
           <q-th v-for="col in props.cols" :key="col.name" :props="props">
             {{ col.label }}
           </q-th>
         </q-tr>
        </template> 
        
       <template v-slot:body="props">
        <q-tr class="cursor-pointer" :props="props" @click.exact="selectedRow(props.rowIndex, props.row)">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
        </q-tr>
      </template>

      </q-table>
    </div>
    <div class="row q-pa-md">
      <postNew class="col"/>
    </div>
  </q-page>
</template>

<script>
import postNew from 'components/post-cmp/postNew.vue'
import axios from 'axios'
export default {
  components: { postNew },
    data () {
      return {
        selected: [],
        columns: [
          { name: 'userId', align: 'center', label: 'userId', field: 'userId',  sortable: false },
          { name: 'id',     align: 'center', label: 'id',     field: 'id',      sortable: false },
          { name: 'title',  align: 'center', label: 'title',  field: 'title',   sortable: false },
          // {
          //   name: 'name',
          //   required: true,
          //   label: '게시판',
          //   align: 'left',
          //   field: row => row.name,
          //   format: val => `${val}`,
          //   sortable: true
          // },
        ],
        data: []
    }
  },
  mounted() {
    console.log('mounted call method initialData')
    this.initialData();
  },
  methods : {
    initialData() {
      this.$store.dispatch('post/postList').then(
        response => {
          console.log('postList store.dispatch', response)
          this.data = response;
        },
        error => {
          console.log('postList store.dispatch error', error)
        }
      )
    },
    selectedRow(rowIndex, row) {
      this.selected = []
      this.selected.push(row)
      console.log('selectedRow', this.selected)
      this.$router.push('/board/postDetail/' + this.selected[0].id);

      // this.$router.push({ 
      //     name : 'postDetail', 
      //     query : { Key1 : rowIndex } ,
      //     // params : row
      // })
    },
  }
}

</script>