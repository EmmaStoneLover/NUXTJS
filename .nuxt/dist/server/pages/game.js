exports.ids = [3];
exports.modules = {

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("60e209ac", content, true, context)
};

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_3184f94b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_3184f94b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_3184f94b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_3184f94b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_3184f94b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#character[data-v-3184f94b]{width:50px;height:50px;background-color:#8a2be2;position:fixed;padding-top:12px;text-align:center}#block1[data-v-3184f94b],#block2[data-v-3184f94b]{width:100px;height:100px;position:fixed}#block1[data-v-3184f94b]{background-color:#d2691e;left:350px;top:200px}#block2[data-v-3184f94b]{background-color:#dc143c;left:200px;top:100px}input[data-v-3184f94b]{width:40px;height:40px;position:fixed;left:180px;top:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/game.vue?vue&type=template&id=3184f94b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<input data-v-3184f94b> <div id=\"character\" class=\"text-white\""+(_vm._ssrStyle(null,{ left: _vm.character.left + 'px', top: _vm.character.top + 'px' }, null))+" data-v-3184f94b>\n    Жопа\n  </div> <div id=\"block1\" data-v-3184f94b></div> <div id=\"block2\" data-v-3184f94b></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/game.vue?vue&type=template&id=3184f94b&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/game.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
/* harmony default export */ var gamevue_type_script_lang_js_ = ({
  layout: 'home',

  data() {
    return {
      character: {
        left: 50,
        top: 100
      }
    };
  },

  methods: {
    MoveCharacterRight() {
      this.character.left = this.character.left + 50;
    },

    MoveCharacterLeft() {
      this.character.left = this.character.left - 50;
    },

    MoveCharacterDown() {
      this.character.top = this.character.top + 50;
    },

    MoveCharacterUp() {
      this.character.top = this.character.top - 50;
    },

    RestartCharacter() {
      this.character.top = this.character.left = 50;
    }

  }
});
// CONCATENATED MODULE: ./pages/game.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_gamevue_type_script_lang_js_ = (gamevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/game.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_gamevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3184f94b",
  "dc3f1cea"
  
)

/* harmony default export */ var game = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=game.js.map