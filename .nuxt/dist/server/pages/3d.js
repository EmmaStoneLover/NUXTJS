exports.ids = [2];
exports.modules = {

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("e370b2c2", content, true, context)
};

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_3d_vue_vue_type_style_index_0_id_718750b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_3d_vue_vue_type_style_index_0_id_718750b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_3d_vue_vue_type_style_index_0_id_718750b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_3d_vue_vue_type_style_index_0_id_718750b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_3d_vue_vue_type_style_index_0_id_718750b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".alert[data-v-718750b4]{cursor:pointer}#drag[data-v-718750b4],#drop[data-v-718750b4]{width:100%;position:relative;min-height:100px}#delete[data-v-718750b4]{max-width:200px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/3d.vue?vue&type=template&id=718750b4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"row justify-content-center\" data-v-718750b4>"+(_vm._ssrList((_vm.categories),function(category){return ("<div id=\"drop\""+(_vm._ssrClass("alert row justify-content-center text-center mt-3 ml-5",category.how))+(_vm._ssrStyle(null,category.style, null))+" data-v-718750b4><h1 data-v-718750b4>"+_vm._ssrEscape(_vm._s(category.title))+"</h1> "+(_vm._ssrList((_vm.drags.filter(function (i) { return i.categoryId === category.id; })),function(item){return ("<div draggable=\"true\""+(_vm._ssrClass("col-lg-5 alert m-2",item.bg))+" data-v-718750b4><h3 data-v-718750b4>"+_vm._ssrEscape(_vm._s(item.text))+"</h3></div>")}))+"</div>")}))+"</div> <div id=\"delete\" class=\"alert alert-danger text-center\" data-v-718750b4><h3 data-v-718750b4>Удалить</h3></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/3d.vue?vue&type=template&id=718750b4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/3d.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _3dvue_type_script_lang_js_ = ({
  layout: 'home',

  data() {
    return {
      drags: [{
        text: 'Мойша',
        id: 1,
        bg: 'alert-warning',
        categoryId: 2
      }, {
        text: 'Марк',
        id: 2,
        bg: 'alert-warning',
        categoryId: 2
      }, {
        text: 'Измаил',
        id: 3,
        bg: 'alert-warning',
        categoryId: 2
      }, {
        text: 'Жопа',
        id: 4,
        bg: 'alert-warning',
        categoryId: 2
      }],
      categories: [{
        id: 1,
        title: 'Печь',
        how: 'alert-danger'
      }, {
        id: 2,
        title: 'Евреи',
        how: 'alert-success'
      }] // background-image: url(fire.gif); background-size: 100%; min-height: 200px;

    };
  },

  methods: {
    onDrag(e, item) {
      e.dataTransfer.dropEffect = 'moove';
      e.dataTransfer.effectAllowed = 'moove';
      e.dataTransfer.setData('itemId', item.id.toString());
    },

    onDrop(e, categoryId) {
      const itemId = parseInt(e.dataTransfer.getData('itemId'));
      this.drags = this.drags.map(i => {
        if (i.id === itemId) i.categoryId = categoryId;
        return i;
      });
    },

    deleteDrop(e) {
      const itemId = parseInt(e.dataTransfer.getData('itemId'));
      this.drags = this.drags.filter(i => i.id !== itemId);
    } // bgDark() {
    //   this.drags[0].bg = 'bg-dark text-white'
    //   this.drags[1].bg = 'bg-dark text-white'
    //   this.drags[2].bg = 'bg-dark text-white'
    //   this.drags[3].bg = 'bg-dark text-white'
    // },


  }
});
// CONCATENATED MODULE: ./pages/3d.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_3dvue_type_script_lang_js_ = (_3dvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/3d.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(77)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_3dvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "718750b4",
  "23565e2c"
  
)

/* harmony default export */ var _3d = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3d.js.map