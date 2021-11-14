const banner = { template: '<p>Home</p>' };
const app = { template: '<p>Product</p>' };
const recomendation = { template: '<p>Recommendation</p>' };
const about = { template: '<p>About</p>' };
const social = { template: '<p>Contacts</p>' };

const routes = [
  {
    path: '/banner',
    name: 'Home',
    component: banner,
  },
  {
    path: '/app',
    name: 'Product',
    component: app,
  },
  {
    path: '/recomendation',
    name: 'Recommendation',
    component: recomendation,
  },
  {
    path: '/about',
    name: 'About',
    component: about,
  },
  {
    path: '/social',
    name: 'contacts',
    component: social,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
