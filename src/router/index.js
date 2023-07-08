import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      //this route redirect to auth/login or /signup
      path: '/auth',
      component: Auth,
      name: 'auth',
      children: [
        { path: "login", component: SignIn },
        { path: "signup", component: SignUp },
      ],
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    }
  ]
})

export default router
