import './style.css'
import App from './App.vue'
import { ViteSSG } from 'vite-ssg'

import Home from './Home.vue'
import KCoverlay from './projetos/KCoverlay.vue'
import ShowcaseSite from './projetos/ShowcaseSite.vue'
import Minelander from './projetos/Minelander.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/KC-Overlay',
      name: 'KC Overlay',
      component: KCoverlay
    },
    {
      path: '/Showcase',
      name: 'Site para showcase',
      component: ShowcaseSite
    },
    {
      path: '/Minelander',
      name: 'Minelander',
      component: Minelander
    }
  ]

export const createApp = ViteSSG(App, {base: import.meta.env.BASE_URL, routes})
