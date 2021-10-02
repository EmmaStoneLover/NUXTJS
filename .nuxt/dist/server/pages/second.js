exports.ids = [6];
exports.modules = {

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("79571f70", content, true, context)
};

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_second_vue_vue_type_style_index_0_id_1c83a593_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_second_vue_vue_type_style_index_0_id_1c83a593_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_second_vue_vue_type_style_index_0_id_1c83a593_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_second_vue_vue_type_style_index_0_id_1c83a593_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_second_vue_vue_type_style_index_0_id_1c83a593_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "[v-cloak][data-v-1c83a593]{display:none}*[data-v-1c83a593]{z-index:0}#cls[data-v-1c83a593]{padding-top:33px}button[data-v-1c83a593]:focus{outline:none;box-shadow:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/second.vue?vue&type=template&id=1c83a593&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<br data-v-1c83a593> <h1 data-v-1c83a593>Главная страница</h1> <h3 class=\"text-cuccess\" data-v-1c83a593>\n    Тут можно получить some staff\n  </h3> <br data-v-1c83a593> <form class=\"form mr-3\" data-v-1c83a593><input placeholder=\"Вставить текст\""+(_vm._ssrAttr("value",(_vm.form.input)))+" class=\"form-control mr-2 mb-3\" data-v-1c83a593> <button type=\"submit\" class=\"btn btn-dark active m-2\" data-v-1c83a593>Добавить</button> <div class=\"btn-group\" data-v-1c83a593><input id=\"btnradio2\" type=\"radio\" checked=\"checked\" name=\"btnradio\" autocomplete=\"off\" class=\"btn-check\" data-v-1c83a593> <label for=\"btnradio2\" class=\"btn btn-outline-dark\" data-v-1c83a593> Белый </label> <input id=\"btnradio3\" type=\"radio\" name=\"btnradio\" autocomplete=\"off\" class=\"btn-check\" data-v-1c83a593> <label for=\"btnradio3\" class=\"btn btn-outline-dark\" data-v-1c83a593> Красный </label></div></form> <br data-v-1c83a593> <div"+(_vm._ssrStyle(null,null, { display: (_vm.getText) ? '' : 'none' }))+" data-v-1c83a593>"+(_vm._ssrList((_vm.reversedContent),function(item){return ("<div data-v-1c83a593><form"+(_vm._ssrClass("card border-2 m-2",{ 'bg-danger': item.changed }))+" data-v-1c83a593><div class=\"alert alert-dismissible mb-0\" data-v-1c83a593><h5 class=\"card-title mt-1\" data-v-1c83a593>"+_vm._ssrEscape("\n            "+_vm._s(item.text)+"\n          ")+"</h5> "+((!item.canDelete)?("<button id=\"cls\" type=\"submit\" class=\"btn-close\" data-v-1c83a593></button>"):"<!---->")+"</div></form></div>")}))+"</div> <div"+(_vm._ssrStyle(null,null, { display: (!_vm.getText) ? '' : 'none' }))+" data-v-1c83a593><div class=\"text-center\" data-v-1c83a593><h4 data-v-1c83a593>Загрузка...</h4></div></div> <br data-v-1c83a593>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/second.vue?vue&type=template&id=1c83a593&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/second.vue?vue&type=script&lang=js&
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
/* harmony default export */ var secondvue_type_script_lang_js_ = ({
  layout: 'home',

  data() {
    return {
      apiURL: 'https://emmastonenodejs.herokuapp.com/api',
      getText: false,
      form: {
        input: '',
        changed: false
      }
    };
  },

  computed: {
    reversedContent() {
      try {
        return this.$store.state.text.text.slice().reverse();
      } catch (e) {}
    }

  },

  async mounted() {
    try {
      await this.$axios.get(this.apiURL).then(res => {
        this.$store.commit('text/getTextStor', res.data.DB);
      });
      this.getText = true;
    } catch (err) {
      this.$store.commit('alert/newAlert', ['Error:', 'Нет подключения к БД', 'danger']);
      console.log('Ошибка с get: ', err);
      this.getText = false;
    }
  },

  methods: {
    async addText() {
      if (this.getText === true) {
        if (this.form.input.trim() !== '') {
          const newText = {
            text: this.form.input.trim(),
            changed: this.form.changed
          }; // console.log('Отправил на сервер', newText)

          this.$store.commit('text/addWillChangedText', newText);

          try {
            await this.$axios.post(this.apiURL, newText).then(res => {
              // console.log('Пришло с сервера', res.data.DB)
              this.$store.commit('text/addTextStor', res.data.DB);
              this.$store.commit('alert/newAlert', [res.data.alert.strong, res.data.alert.msg, res.data.alert.how]);
              this.form.input = '';
            });
          } catch (err) {
            this.$store.commit('alert/newAlert', ['Error:', 'Нет подключения к БД', 'danger']);
            console.log('Нет подключения к БД', err);
            this.getText = false;
          }
        } else {
          this.$store.commit('alert/newAlert', ['Нет', 'Сначала текст вставь', 'warning']);
        }
      } else {
        this.$store.commit('alert/newAlert', ['Error:', 'Нет подключения к БД', 'danger']);
        this.getText = false;
      }
    },

    async deleteText(_id) {
      this.$store.commit('text/deleteTextStor', _id);

      try {
        await this.$axios.delete(`${this.apiURL}/delete/${_id}`).then(res => {
          if (res.data.deleted === false) {
            this.getText = false;
          }

          this.$store.commit('alert/newAlert', [res.data.alert.strong, res.data.alert.msg, res.data.alert.how]);
        });
      } catch (err) {
        // this.getText = false
        this.$store.commit('alert/newAlert', ['Error:', 'Нет подключения к БД', 'danger']);
        console.log('Нет подключения к БД', err);
      }
    },

    HowMuchText() {
      this.$store.commit('text/howMuchText');
      this.$store.commit('alert/newAlert', ['Записей: ', this.$store.state.text.howMuch, 'info']);
    } // showChangeTextButton(_id) {
    //   this.$store.commit('text/showChangeTextButton', _id)
    //   console.log(this.$store.state.text.text)
    // },


  }
});
// CONCATENATED MODULE: ./pages/second.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_secondvue_type_script_lang_js_ = (secondvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/second.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(83)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_secondvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1c83a593",
  "634f4666"
  
)

/* harmony default export */ var second = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=second.js.map