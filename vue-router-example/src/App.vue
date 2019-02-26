<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col class="mt-2">
          <b-list-group horizontal>
            <router-link class="list-group-item list-group-item-action" to="/">Home</router-link>
            <router-link class="list-group-item list-group-item-action" to="/link1">Link 1</router-link>
            <router-link class="list-group-item list-group-item-action" to="/link2">Link 2</router-link>
          </b-list-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="mt-2">
          <b-card>
            <router-view></router-view>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import Index from '@/pages/index.vue'
import Link1 from '@/pages/link1.vue'
import Link2 from '@/pages/link2.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

export default {
  name: 'app',
  router: new VueRouter ({
    mode: 'history',
    routes: [
      { path: '/', component: Index },
      { path: '/link1', component: Link1 },
      { path: '/link2', component: Link2 },
    ],
  }),
}
</script>

<style></style>
