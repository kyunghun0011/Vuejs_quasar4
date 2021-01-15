<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->

        <div class="q-pa-md">
          <q-btn-dropdown color="primary" label="User">
            <q-list>
              <div v-if="currentUser">
                <q-item clickable v-close-popup @click="handlelogOut">
                  <q-item-section>
                    <q-item-label>logout</q-item-label>
                  </q-item-section>
                </q-item>
              </div>
              <div v-else>
                <q-item clickable v-close-popup to="/user/login">
                  <q-item-section>
                    <q-item-label>login</q-item-label>
                  </q-item-section>
                </q-item>
              </div>
              <q-item clickable v-close-popup to="/user/register">
                <q-item-section>
                  <q-item-label>register</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>      
      
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
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import routes from 'src/router/routes';

const linksData = [
  {
    title: 'Home',
    caption: 'Home.dev',
    icon: 'home',
    routeName : '/'
  },
  {
    title: 'test',
    caption: 'quasar.dev',
    icon: 'school',
    routeName : '/test'
  },
  {
    title: '게시판',
    caption: '게시판-caption',
    icon: 'school',
    routeName : '/board/posts'
  }
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      isLogin : false // localStroage 사용 예정
    }
  },
  computed : {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods : {
    handlelogOut() {
      console.log('handlelogOut remove localstorage user');
      this.$store.dispatch('auth/logout');
      if (this.$router.currentRoute.path != '/'){
        this.$router.push('/')
      }
    }
  }
}
</script>
