exports.ids = [7];
exports.modules = {

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/socket-io.vue?vue&type=template&id=7fbc409f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container mt-3"},[_vm._ssrNode("<form class=\"m-3\" data-v-7fbc409f><input type=\"text\""+(_vm._ssrAttr("value",(_vm.text)))+" class=\"form-control\" data-v-7fbc409f> <br data-v-7fbc409f><br data-v-7fbc409f> <h3 data-v-7fbc409f>"+_vm._ssrEscape(_vm._s(_vm.text))+"</h3></form>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/socket-io.vue?vue&type=template&id=7fbc409f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/socket-io.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var socket_iovue_type_script_lang_js_ = ({
  layout: 'home',

  data() {
    return {
      text: ''
    };
  },

  mounted() {
    console.log('Я открылся))))');
    this.socket = this.$nuxtSocket({
      channel: '/socket-io'
    });
  },

  methods: {
    SocketIo(text) {
      this.socket.emit('text', {
        text: text
      }, res => {
        console.log(res.data.text);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/socket-io.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_socket_iovue_type_script_lang_js_ = (socket_iovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/socket-io.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_socket_iovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7fbc409f",
  "14cbecf7"
  
)

/* harmony default export */ var socket_io = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=socket-io.js.map