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
import Router from './Router'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

export default {
  name: 'app',
  router: Router
}
</script>

<style></style>
