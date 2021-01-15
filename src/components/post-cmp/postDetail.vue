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
          <q-input type="text"     name="title"  label="제목" v-model="this.post.title"  :readonly = "true" />
          <q-input type="text"     name="userId" label="유저Id" v-model="this.post.userId" :readonly = "true" />
          <q-input type="textarea" name="body"   label="내용" v-model="this.post.body"   :readonly = "true" />
        </q-card-section>

        <q-separator />

        <q-card-actions class="q-pa-md justify-center">
          <q-btn label = "수정" @click="movePostEditcmp"/> 
          <q-btn label="삭제" @click="deletePost" color = "primary" /> 
        </q-card-actions>
      </q-card>
    </div>

    </q-page>
</template>

<script>
export default {
  name: 'postDetail',
  data () {
    return {
      post : {},
      submitResult: []
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
        console.log('postDetail.vue store.dispatch', response)
        this.post = response;
      })
      .catch( error => {
        console.log('postDetail.vue error', error);
      });
    },
    movePostEditcmp() {
      // edit페이지 작성예정
      this.$router.push('/board/postEdit/' + this.$route.params.id)
    },
    deletePost() {
      this.$store.dispatch('post/postDelete', this.$route.params.id)
      .then(response => {
        console.log('postDetail.vue deletePost', response)
        this.$router.push('/board/posts')
      })
      .catch( error => {
        console.log('error', error)
      })
    }
  }
}
</script>
