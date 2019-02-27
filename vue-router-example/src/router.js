import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/pages/index.vue'
import Link1 from '@/pages/link1.vue'
import Link2 from '@/pages/link2.vue'

Vue.use(VueRouter);

const Router = new VueRouter ({
    mode: 'history',
    routes: [
      { path: '/', component: Index },
      { path: '/link1', component: Link1 },
      { path: '/link2', component: Link2 },
    ],
})

export default Router
