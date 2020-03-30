import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use( VueRouter )

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/customers',
        name: 'customers.list',
        component: () => import( '../views/customers/List.vue' )
    },
    {
        path: '/customers/car-dealer/:id',
        name: 'customers.car-dealer.list',
        component: () => import( '../views/customers/ListByCarDealer.vue' )
    },
    {
        path: '/customers/create',
        name: 'customers.create',
        component: () => import( '../views/customers/Create.vue' )
    },
    {
        path: '/customers/:id',
        name: 'customers.show',
        component: () => import( '../views/customers/Show.vue' )
    },
    {
        path: '/customers/:id/edit',
        name: 'customers.edit',
        component: () => import( '../views/customers/Edit.vue' )
    },
    {
        path: '/car-dealers',
        name: 'car-dealers.list',
        component: () => import( '../views/car-dealers/List.vue' )
    },
    {
        path: '/car-dealers/create',
        name: 'car-dealers.create',
        component: () => import( '../views/car-dealers/Create.vue' )
    },
    {
        path: '/car-dealers/:id',
        name: 'car-dealers.show',
        component: () => import( '../views/car-dealers/Show.vue' )
    },
    {
        path: '/car-dealers/:id/edit',
        name: 'car-dealers.edit',
        component: () => import( '../views/car-dealers/Edit.vue' )
    }
]

const router = new VueRouter( {
    routes
} )

export default router
