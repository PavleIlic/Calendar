import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Calendar from '../components/calendar/calendar.vue';

Vue.use(VueRouter)

//   const routes = [
//   {
//     path: '/',
//     name: 'calendar',
//     component: Calendar
//   }
// ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'calendar',
      component: Calendar
    },
  ]
})

export default router
