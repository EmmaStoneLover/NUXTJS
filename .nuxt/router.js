import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _73a1777c = () => interopDefault(import('..\\pages\\3d.vue' /* webpackChunkName: "pages/3d" */))
const _4629223a = () => interopDefault(import('..\\pages\\game.vue' /* webpackChunkName: "pages/game" */))
const _4e7a959b = () => interopDefault(import('..\\pages\\popit.vue' /* webpackChunkName: "pages/popit" */))
const _facd37b6 = () => interopDefault(import('..\\pages\\second.vue' /* webpackChunkName: "pages/second" */))
const _7041869f = () => interopDefault(import('..\\pages\\socket-io.vue' /* webpackChunkName: "pages/socket-io" */))
const _57549431 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _73a1777c,
    name: "3d"
  }, {
    path: "/game",
    component: _4629223a,
    name: "game"
  }, {
    path: "/popit",
    component: _4e7a959b,
    name: "popit"
  }, {
    path: "/second",
    component: _facd37b6,
    name: "second"
  }, {
    path: "/socket-io",
    component: _7041869f,
    name: "socket-io"
  }, {
    path: "/",
    component: _57549431,
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
