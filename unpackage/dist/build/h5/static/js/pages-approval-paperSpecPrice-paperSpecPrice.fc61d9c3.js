(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-approval-paperSpecPrice-paperSpecPrice"],{"06c5":function(e,t,a){"use strict";a("a630"),a("fb6a"),a("d3b7"),a("25f0"),a("3ca3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n=r(a("6b75"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(e){if("string"===typeof e)return(0,n.default)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?(0,n.default)(e,t):void 0}}},"09f2":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var n={approval:a("1433").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("approval",{ref:"approval",attrs:{listLoadUrl:"/approval/paperSpecPrice/approvalList"},scopedSlots:e._u([{key:"content",fn:function(t){var n=t.data,r=t.index;return[a("v-uni-view",{staticClass:"grid-warp",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openDetail(n,r)}}},[a("v-uni-view",{staticClass:"grid-title"},[e._v(e._s(null==n.co_CustName?" - ":n.co_CustName)),a("v-uni-view",{staticClass:"cu-tag bg-red radius"},[e._v("未审核")])],1),a("v-uni-view",{staticClass:"grid-body"},[a("v-uni-view",{staticClass:"grid-flex padding-10"},[a("v-uni-view",[a("v-uni-text",[e._v("单号:"+e._s(n.co_No))])],1),a("v-uni-view",[a("v-uni-text",[e._v("日期:"+e._s(n.co_Date))])],1)],1),a("v-uni-view",{staticClass:"grid-flex padding-10"},[a("v-uni-view",[a("v-uni-text",[e._v("规格:"+e._s(n.specs))])],1),a("v-uni-view",[a("v-uni-text",[e._v("纸质:"+e._s(n.co_ArtId))])],1)],1),a("v-uni-view",{staticClass:"grid-flex padding-10"},[a("v-uni-view",[a("v-uni-text",[e._v("")])],1),a("v-uni-view",[a("v-uni-text")],1)],1)],1)],1)]}}])},[a("v-uni-view",{attrs:{slot:"page-title"},slot:"page-title"},[e._v("纸板特价审批")])],1)],1)},i=[]},1433:function(e,t,a){"use strict";a.r(t);var n=a("4972"),r=a("23b8");for(var i in r)"default"!==i&&function(e){a.d(t,e,(function(){return r[e]}))}(i);var o,u=a("f0c5"),c=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"7546557b",null,!1,n["a"],o);t["default"]=c.exports},"23b8":function(e,t,a){"use strict";a.r(t);var n=a("d7ca"),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=r.a},2765:function(e,t,a){"use strict";a.r(t);var n=a("09f2"),r=a("9a56");for(var i in r)"default"!==i&&function(e){a.d(t,e,(function(){return r[e]}))}(i);a("e4fb");var o,u=a("f0c5"),c=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"2bff39bb",null,!1,n["a"],o);t["default"]=c.exports},2909:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;var n=u(a("6005")),r=u(a("db90")),i=u(a("06c5")),o=u(a("3427"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(0,n.default)(e)||(0,r.default)(e)||(0,i.default)(e)||(0,o.default)()}},"298b":function(e,t,a){var n=a("e9c9");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("4f06").default;r("3b77642d",n,!0,{sourceMap:!1,shadowMode:!1})},3427:function(e,t,a){"use strict";function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},4972:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0},on:{BackPageEvent:function(t){arguments[0]=t=e.$handleEvent(t),e.backPageEvent.apply(void 0,arguments)}}},[a("template",{attrs:{slot:"content"},slot:"content"},[e._t("page-title")],2)],2),a("v-uni-view",[e._l(e.approvalList,(function(t,n){return[a("v-uni-view",[e._t("content",null,{index:n,data:t})],2)]}))],2)],1)},i=[]},6005:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n=r(a("6b75"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e){if(Array.isArray(e))return(0,n.default)(e)}},"6b75":function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},"9a56":function(e,t,a){"use strict";a.r(t);var n=a("efd7"),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=r.a},d7ca:function(e,t,a){"use strict";var n=a("4ea4");a("99af"),a("a434"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("2909")),i=n(a("c8d6")),o=n(a("ee99")),u={components:{cuCustom:i.default},name:"approval",data:function(){return{page:{pageNumber:1,totalPage:1,pageOver:!1},approvalList:[],pageLoading:"more",firstLoading:!0}},props:{listLoadUrl:String},methods:{backPageEvent:function(){this.$emit("pageBack")},approvalListProvider:function(){var e=this;this.page.pageOver||(this.toast.loading(),o.default.post(this.listLoadUrl,this.page).then((function(t){e.approvalList=[].concat((0,r.default)(e.approvalList),(0,r.default)(t.records)),e.page.pageOver=!(e.page.pageNumber<t.pages),e.page.pageOver||(e.page.pageNumber=t.current+1),e.page.pages=t.pages,e.toast.hide()})))},deleteApproval:function(e){this.approvalList.splice(e,1)}},created:function(){this.approvalListProvider()}};t.default=u},db90:function(e,t,a){"use strict";function n(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},e4fb:function(e,t,a){"use strict";var n=a("298b"),r=a.n(n);r.a},e9c9:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".card[data-v-2bff39bb]{width:90%;margin-left:5%;border-radius:%?10?%;padding:%?30?%}.grid-title[data-v-2bff39bb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.text-price[data-v-2bff39bb]{color:#4aecdb;font-size:%?50?%}",""]),e.exports=t},efd7:function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("1433")),i={components:{approval:r.default},data:function(){return{approvalClickIndex:-1}},methods:{openDetail:function(e,t){this.cache.put(String(e.ID1),e),this.approvalClickIndex=t,this.router.navigate("/pages/approval/paperSpecPrice/detail?id=".concat(e.ID1))}},onReachBottom:function(e){this.$refs.approval.approvalListProvider()},onLoad:function(){var e=this;uni.$off("boxSpecPriceApprovalSuccess"),uni.$on("boxSpecPriceApprovalSuccess",(function(t){-1!==e.approvalClickIndex&&e.$refs.approval.deleteApproval(e.approvalClickIndex)}))}};t.default=i}}]);