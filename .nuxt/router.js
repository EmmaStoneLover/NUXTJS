import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d733ed2 = () => interopDefault(import('..\\pages\\3d.vue' /* webpackChunkName: "pages/3d" */))
const _6eacc9f8 = () => interopDefault(import('..\\pages\\game.vue' /* webpackChunkName: "pages/game" */))
const _1636c5b4 = () => interopDefault(import('..\\pages\\popit.vue' /* webpackChunkName: "pages/popit" */))
const _ad1f640c = () => interopDefault(import('..\\pages\\second.vue' /* webpackChunkName: "pages/second" */))
const _3bf6d0aa = () => interopDefault(import('..\\pages\\socket-io.vue' /* webpackChunkName: "pages/socket-io" */))
const _0482c888 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/3d",
    component: _7d733ed2,
    name: "3d"
  }, {
    path: "/game",
    component: _6eacc9f8,
    name: "game"
  }, {
    path: "/popit",
    component: _1636c5b4,
    name: "popit"
  }, {
    path: "/second",
    component: _ad1f640c,
    name: "second"
  }, {
    path: "/socket-io",
    component: _3bf6d0aa,
    name: "socket-io"
  }, {
    path: "/",
    component: _0482c888,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
