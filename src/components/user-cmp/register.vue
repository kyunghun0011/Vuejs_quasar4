<template>
    <q-page class = "row justify-center items-center bg-primary">
    <div class="column">
      <q-card flat bordered >
        <q-card-section class="bg-yellow q-pa-md">
          <div class="row items-center">
            <div class="col">
              <div class="text-h6">Register</div>
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <q-input type="text" label="email"    name="email"    v-model="user.email" />
          <q-input type="text" label="password" name="password" v-model="user.password"/>
          <q-input type="text" label="username" name="username" v-model="user.username"/>
        </q-card-section>

        <q-separator />

        <q-card-actions class="q-pa-md justify-center">
          <q-btn @click="handleRegister" label ="회원가입" type="button" color="primary" />
        </q-card-actions>
      </q-card>
    </div>

    </q-page>
</template>

<script>
import User from '../../models/user';
import { mapstate, mapActions } from "vuex"

export default {
  name: 'Register',
  data () {
    return {
      user : new User('', '', ''),
    }
  },
  computed : {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    // if (this.loggedIn) {
    //   this.$router.push('/');
    // }
  },
  methods : {
    ...mapActions( ['register' ]),
    handleRegister () { 
      this.$store.dispatch('auth/register', this.user).then(
        response => {
          console.log('handleRegister success', response)
          this.$router.push('/')
        },
        error => {
          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    }
  }
}
</script>
ㅊ