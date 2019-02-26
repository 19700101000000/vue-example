<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col class="mt-2">
          <b-list-group horizontal>
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
import Link1 from '@/components/link1.vue'
import Link2 from '@/components/link2.vue'

Vue.use(VueRouter)

const router = new VueRouter ({
  routes: [
    { path: '/link1', component: Link1 },
    { path: '/link2', component: Link2 },
  ],
})

export default {
  name: 'app',
  router,
}
</script>

<style></style>
