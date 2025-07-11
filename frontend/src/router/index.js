import { createRouter, createWebHistory } from 'vue-router';
import Hero from '../components/Hero.vue';
import Education from '../components/Education.vue';
import Skills from '../components/Skills.vue';
import Projects from '../components/Projects.vue';
import Contact from '../components/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Hero,
  },
  {
    path: '/education',
    name: 'Education',
    component: Education,
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Ensure smooth scrolling to top on route change
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  },
});

export default router;