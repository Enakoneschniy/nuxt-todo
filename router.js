import Vue from 'vue'
import Router from 'vue-router'

import About from '~/pages/about'
import Home from '~/pages/index'
import Contacts from '~/pages/contacts'

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        name: 'about-page',
        path: '/about',
        component: About
      },
      {
        name: 'contacts-page',
        path: '/contacts',
        component: Contacts
      }
    ]
  })
}
