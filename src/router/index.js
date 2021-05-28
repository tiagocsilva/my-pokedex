import Vue from 'vue';
import VueRouter from 'vue-router';
import { Home, PokemonView, MyPokedex } from '@/views/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pokemon/:name',
    name: 'Pokemon',
    component: PokemonView,
  },
  {
    path: '/my-pokedex',
    name: 'MyPokedex',
    component: MyPokedex,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
