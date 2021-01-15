<template>
  <div>
    <q-btn label="글작성" color="primary" @click="isDialogOpen = !isDialogOpen" />
    
    <q-dialog v-model="isDialogOpen">
        <div class="column">
            <q-card flat bordered style="width: 500px; max-width: 80vw;">
            <q-card-section class="bg-yellow q-pa-md">
                <div class="row items-center">
                <div class="col">
                    <div class="text-h6">글쓰기</div>
                </div>
                </div>
            </q-card-section>

            <q-card-section>
                <q-input type="text"     name="titie"   v-model="Post.title" label="제목" />
                <q-input type="textarea" name="content" v-model="Post.body" label="내용" />                    
            </q-card-section>

            <q-separator />

            <q-card-actions class="q-pa-md justify-center">
                <q-btn label="글작성" type ="button" @click="insertPost" style="width: 70px" />
                <q-btn @click="isDialogOpen = !isDialogOpen" style="width: 70px"> 닫기</q-btn>
            </q-card-actions>
            </q-card>
        </div>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: 'postNew',
  data () {
    return {
      Post : {
          title : '',
          body : ''
      } ,
      isDialogOpen : false ,
    }
  },
  props: {
    isOpen: {
      type: Boolean
    }
  },
  methods : {
    insertPost() {
      this.$store.dispatch('post/postNew', this.Post).then(
        response => {
          console.log('postNew.vue dispatch', response)
          this.isDialogOpen = false 
        },
        error => {
          console.log('postNew.vue dispatch error', error)
        }
      )
    }
  }  
}
</script>
z