(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{296:function(t,e,r){var content=r(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("e370b2c2",content,!0,{sourceMap:!1})},300:function(t,e,r){"use strict";r(296)},301:function(t,e,r){var n=r(74)(!1);n.push([t.i,".alert[data-v-718750b4]{cursor:pointer}#drag[data-v-718750b4],#drop[data-v-718750b4]{width:100%;position:relative;min-height:100px}#delete[data-v-718750b4]{max-width:200px}",""]),t.exports=n},308:function(t,e,r){"use strict";r.r(e);r(12),r(76),r(47),r(24);var n={layout:"home",data:function(){return{drags:[{text:"Мойша",id:1,bg:"alert-warning",categoryId:2},{text:"Марк",id:2,bg:"alert-warning",categoryId:2},{text:"Измаил",id:3,bg:"alert-warning",categoryId:2},{text:"Жопа",id:4,bg:"alert-warning",categoryId:2}],categories:[{id:1,title:"Печь",how:"alert-danger"},{id:2,title:"Евреи",how:"alert-success"}]}},methods:{onDrag:function(t,e){t.dataTransfer.dropEffect="moove",t.dataTransfer.effectAllowed="moove",t.dataTransfer.setData("itemId",e.id.toString())},onDrop:function(t,e){var r=parseInt(t.dataTransfer.getData("itemId"));this.drags=this.drags.map((function(i){return i.id===r&&(i.categoryId=e),i}))},deleteDrop:function(t){var e=parseInt(t.dataTransfer.getData("itemId"));this.drags=this.drags.filter((function(i){return i.id!==e}))}}},o=(r(300),r(17)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},t._l(t.categories,(function(e){return r("div",{key:e.id,staticClass:"alert row justify-content-center text-center mt-3 ml-5",class:e.how,style:e.style,attrs:{id:"drop"},on:{drop:function(r){return t.onDrop(r,e.id)},dragover:function(t){t.preventDefault()},dragenter:function(t){t.preventDefault()}}},[r("h1",[t._v(t._s(e.title))]),t._v(" "),t._l(t.drags.filter((function(i){return i.categoryId===e.id})),(function(e){return r("div",{key:e.id,staticClass:"col-lg-5 alert m-2",class:e.bg,attrs:{draggable:"true"},on:{dragstart:function(r){return t.onDrag(r,e)}}},[r("h3",[t._v(t._s(e.text))])])}))],2)})),0),t._v(" "),r("div",{staticClass:"alert alert-danger text-center",attrs:{id:"delete"},on:{drop:function(e){return t.deleteDrop(e)},dragover:function(t){t.preventDefault()},dragenter:function(t){t.preventDefault()}}},[r("h3",[t._v("Удалить")])])])}),[],!1,null,"718750b4",null);e.default=component.exports}}]);