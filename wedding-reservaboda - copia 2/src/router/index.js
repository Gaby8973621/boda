import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Contact from '../views/Contact.vue';
import Correo from '../views/Correo.vue';
import Pokemon from '../views/Pokemon.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/correo', name: 'Correo', component: Correo },
  { path: '/pokemon/:id', name: 'Pokemon', component: Pokemon },
];
 
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
