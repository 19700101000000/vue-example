import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './pages/Index.vue'
import Link1 from './pages/Link1.vue'
import Link2 from './pages/Link2.vue'

Vue.use(VueRouter);

export default new VueRouter ({
    mode: 'history',
    routes: [
      { path: '/', component: Index },
      { path: '/link1', component: Link1 },
      { path: '/link2', component: Link2 },
    ],
})

