<template>
    <q-page class = "row justify-center items-center bg-primary">
    <div class="column">
      <q-card flat bordered >
        <q-card-section class="bg-yellow q-pa-md">
          <div class="row items-center">
            <div class="col">
              <div class="text-h6">POST_DETAIL
              </div>
            </div>
          </div>
        </q-card-section>

        <q-card-section >
          <q-input type="text"     name="title"  label="제목"   v-model="post.title"  />
          <q-input type="text"     name="userId" label="유저Id" v-model="post.userId"  />
          <q-input type="textarea" name="body"   label="내용"   v-model="post.body"    />
        </q-card-section>

        <q-separator />

        <q-card-actions class="q-pa-md justify-center">
          <q-btn label="수정" @click="updatePost" color = "primary" /> 
        </q-card-actions>
      </q-card>
    </div>

    </q-page>
</template>

<script>
export default {
  name: 'postEdit',
  data () {
    return {
      post : {
        title : '',
        userId : '',
        body : ''
      }
    }
  },
  mounted() {
    console.log('postDetail mounted params id', this.$route.params.id)
    this.initialData();
  },
  methods : {
    initialData () {
      this.$store.dispatch('post/postDetail', this.$route.params.id)
      .then(response => {
        console.log('postEdit.vue store.dispatch', response)
        this.post = response;
      })
      .catch( error => {
        console.log('postEdit.vue error', error);
      });
    },
    updatePost() {
      this.$store.dispatch('post/postUpdate', [this.$route.params.id, this.post])
      .then(response => {
        console.log('postEdit.vue', response)
        this.$router.push('/board/posts')
      })
      .catch( error => {
        console.log('error', error)
      })
    },
    // movePostEditcmp() {
    //   this.$router.push({ 
    //       name : 'postEdit', 
    //       query : { Key1 : '1234' } ,
    //       params : this.postData
    //   })
    // },
  }
}
</script>