(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{299:function(t,e,r){var content=r(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("79571f70",content,!0,{sourceMap:!1})},306:function(t,e,r){"use strict";r(299)},307:function(t,e,r){var n=r(74)(!1);n.push([t.i,"[v-cloak][data-v-1c83a593]{display:none}*[data-v-1c83a593]{z-index:0}#cls[data-v-1c83a593]{padding-top:33px}button[data-v-1c83a593]:focus{outline:none;box-shadow:none}",""]),t.exports=n},311:function(t,e,r){"use strict";r.r(e);var n=r(4),o=(r(46),r(40),r(207),r(41),{layout:"home",data:function(){return{apiURL:"https://emmastonenodejs.herokuapp.com/api",getText:!1,form:{input:"",changed:!1}}},computed:{reversedContent:function(){try{return this.$store.state.text.text.slice().reverse()}catch(t){}}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.apiURL).then((function(e){t.$store.commit("text/getTextStor",e.data.DB)}));case 3:t.getText=!0,e.next=11;break;case 6:e.prev=6,e.t0=e.catch(0),t.$store.commit("alert/newAlert",["Error:","Нет подключения к БД","danger"]),console.log("Ошибка с get: ",e.t0),t.getText=!1;case 11:case"end":return e.stop()}}),e,null,[[0,6]])})))()},methods:{addText:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==t.getText){e.next=19;break}if(""===t.form.input.trim()){e.next=16;break}return r={text:t.form.input.trim(),changed:t.form.changed},t.$store.commit("text/addWillChangedText",r),e.prev=4,e.next=7,t.$axios.post(t.apiURL,r).then((function(e){t.$store.commit("text/addTextStor",e.data.DB),t.$store.commit("alert/newAlert",[e.data.alert.strong,e.data.alert.msg,e.data.alert.how]),t.form.input=""}));case 7:e.next=14;break;case 9:e.prev=9,e.t0=e.catch(4),t.$store.commit("alert/newAlert",["Error:","Нет подключения к БД","danger"]),console.log("Нет подключения к БД",e.t0),t.getText=!1;case 14:e.next=17;break;case 16:t.$store.commit("alert/newAlert",["Нет","Сначала текст вставь","warning"]);case 17:e.next=21;break;case 19:t.$store.commit("alert/newAlert",["Error:","Нет подключения к БД","danger"]),t.getText=!1;case 21:case"end":return e.stop()}}),e,null,[[4,9]])})))()},deleteText:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.$store.commit("text/deleteTextStor",t),r.prev=1,r.next=4,e.$axios.delete("".concat(e.apiURL,"/delete/").concat(t)).then((function(t){!1===t.data.deleted&&(e.getText=!1),e.$store.commit("alert/newAlert",[t.data.alert.strong,t.data.alert.msg,t.data.alert.how])}));case 4:r.next=10;break;case 6:r.prev=6,r.t0=r.catch(1),e.$store.commit("alert/newAlert",["Error:","Нет подключения к БД","danger"]),console.log("Нет подключения к БД",r.t0);case 10:case"end":return r.stop()}}),r,null,[[1,6]])})))()},HowMuchText:function(){this.$store.commit("text/howMuchText"),this.$store.commit("alert/newAlert",["Записей: ",this.$store.state.text.howMuch,"info"])}}}),c=(r(306),r(17)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("br"),t._v(" "),r("h1",[t._v("Главная страница")]),t._v(" "),r("h3",{staticClass:"text-cuccess",on:{click:t.HowMuchText}},[t._v("\n    Тут можно получить some staff\n  ")]),t._v(" "),r("br"),t._v(" "),r("form",{staticClass:"form mr-3",on:{submit:function(e){return e.preventDefault(),t.addText.apply(null,arguments)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.input,expression:"form.input"}],staticClass:"form-control mr-2 mb-3",attrs:{placeholder:"Вставить текст"},domProps:{value:t.form.input},on:{input:function(e){e.target.composing||t.$set(t.form,"input",e.target.value)}}}),t._v(" "),r("button",{staticClass:"btn btn-dark active m-2",attrs:{type:"submit"}},[t._v("Добавить")]),t._v(" "),r("div",{staticClass:"btn-group"},[r("input",{staticClass:"btn-check",attrs:{id:"btnradio2",type:"radio",checked:"",name:"btnradio",autocomplete:"off"},on:{click:function(e){t.form.changed=!1}}}),t._v(" "),r("label",{staticClass:"btn btn-outline-dark",attrs:{for:"btnradio2"}},[t._v(" Белый ")]),t._v(" "),r("input",{staticClass:"btn-check",attrs:{id:"btnradio3",type:"radio",name:"btnradio",autocomplete:"off"},on:{click:function(e){t.form.changed=!0}}}),t._v(" "),r("label",{staticClass:"btn btn-outline-dark",attrs:{for:"btnradio3"}},[t._v(" Красный ")])])]),t._v(" "),r("br"),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.getText,expression:"getText"}]},t._l(t.reversedContent,(function(e){return r("div",{key:e._id},[r("form",{staticClass:"card border-2 m-2",class:{"bg-danger":e.changed},on:{submit:function(r){return r.preventDefault(),t.deleteText(e._id)}}},[r("div",{staticClass:"alert alert-dismissible mb-0"},[r("h5",{staticClass:"card-title mt-1"},[t._v("\n            "+t._s(e.text)+"\n          ")]),t._v(" "),e.canDelete?t._e():r("button",{staticClass:"btn-close",attrs:{id:"cls",type:"submit"}})])])])})),0),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.getText,expression:"!getText"}]},[t._m(0)]),t._v(" "),r("br")])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("h4",[t._v("Загрузка...")])])}],!1,null,"1c83a593",null);e.default=component.exports}}]);