import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Sample from '../views/Sample.vue';
import Signup from '../views/Signup.vue';
import Login from "../views/Login.vue";
import PostIndex from "../views/PostIndex.vue";
import PostsNew from "../views/PostsNew.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/sample',
    name: 'Sample',
    componenet: Sample
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup
  },

  {
    path: "/login",
    name: "login",
    component: Login
  },

  {
    path: "/index.js",
    name: "Post Index",
    component: PostIndex
  },

  {
    path: "/new.js",
    name: "Posts New",
    component: PostsNew
  },


];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
