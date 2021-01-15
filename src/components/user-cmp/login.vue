<template>
    <q-page class = "row justify-center items-center bg-primary">
    <div class="column">
      <q-card flat bordered >
        <q-card-section class="bg-yellow q-pa-md">
          <div class="row items-center">
            <div class="col">
              <div class="text-h6">LOGIN</div>
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <q-input type="text" label="username" name="username" v-model="user.username"/>
          <q-input type="text" label="password" name="password" v-model="user.password"/>
        </q-card-section>

        <q-separator />

        <q-card-actions class="q-pa-md justify-center">
          <q-btn @click="handleLogin" label="로그인" type="button" color="primary"/> 
        </q-card-actions>
      </q-card>
    </div>

    </q-page>
</template>

<script>
import User from '../../models/user';

export default {
  name: 'Login',
  data () {
    return {
      user : new User('', ''),
      loading: false,
      message: ''
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/'); // 이미 로그인 된 상태 일때는 메인페이지 이동
      // 나중에 이미 로그인한 경우 로그아웃 버튼만 보이게 처리할 예정.
    }
  },
  methods : {
    handleLogin () { 
      this.loading = true;

      if (this.user.username && this.user.password) {
        this.$store.dispatch('auth/login', this.user).then(
          () => {
            this.$router.push('/'); // 로그인 후 메인페이지 이동
        }
        ,
        error => {
          this.loading = false;
          this.message = 
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      ).catch(error => {
        console.log('handleLogin Failure', error)
      });
      }
    }
  }
};
</script>

