(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index~pages-manager-manager~pages-masterBoard-masterBoard~pages-masterBoard-masterBoard_~3d740589"],{"0e2c":function(t,e,i){"use strict";i("4160"),i("a9e3"),i("d3b7"),i("e25e"),i("ac1f"),i("25f0"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"UniGrid",props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#e5e5e5"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,width:0}},created:function(){this.children=[]},mounted:function(){this.init()},methods:{init:function(){var t=this;setTimeout((function(){t._getSize((function(e){t.children.forEach((function(t,i){t.width=e}))}))}),50)},change:function(t){this.$emit("change",t)},_getSize:function(t){var e=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(i){e.width=parseInt((i[0].width-1)/e.column)+"px",t(e.width)}))}}};e.default=r},1745:function(t,e,i){var r=i("cc95");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("a89ffbec",r,!0,{sourceMap:!1,shadowMode:!1})},"2c75":function(t,e,i){"use strict";i.r(e);var r=i("6677"),n=i.n(r);for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);e["default"]=n.a},"405a":function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-grid-wrap[data-v-63e2101f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100%}.uni-grid[data-v-63e2101f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.uni-grid--border[data-v-63e2101f]{border-left-color:#c8c7cc;border-left-style:solid;border-left-width:1px}',""]),t.exports=e},4831:function(t,e,i){var r=i("405a");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("72b129e6",r,!0,{sourceMap:!1,shadowMode:!1})},"58be":function(t,e,i){"use strict";(function(t){var r=i("4ea4");i("13d5"),i("a9e3"),i("d3b7"),i("ac1f"),i("25f0"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("50ce")),o=(r(i("c9dc")),r(i("ee99"))),a={name:"mixin-base",data:function(){return{pageSetting:{current:1,pageSize:20,total:100},isLoaddingData:!1,otherHeight:0,leftContentHeight:0,avgWidth:90}},computed:{CustomBarHeight:function(){return this.CustomBar},userInfo:function(){var t=n.default.get(this.appConst.CLIENT_USER_CACHE_NAME);return t}},methods:{checkScan:function(){return void 0!==window},addThousandthSign:function(t){if(t){var e=/(\d{1,3})(?=(\d{3})+(?:$|\.))/g;return t.toString().replace(e,"$1,")}return"0.00"},rowClassNameFn:function(t,e){return Number(e)%2==0?"table-single-row":""},onChangeInToCache:function(t,e){e&&e.tokenKey&&n.default.put(String(e.tokenKey),t)},getTableAvgWidth:function(t){var e=0;this.avgWidth=90;var i=0;return t&&t.length>0&&(e=t.length,i=t.reduce((function(t,e){return t+=Number(e.$width?e.$width:0),t}),0)),i>0&&e>0&&(this.avgWidth=~~(i/e)),this.avgWidth},getOrPostDataBy:function(t,e){var i=this;return this.isLoaddingData=!0,this.toast.loading(),new Promise((function(r,n){try{o.default.post(t,e).then((function(t){i.toast.hide(),r(t),i.isLoaddingData=!1})).catch((function(t){i.toast.hide(),n(t),"string"===typeof t?i.toast.message(t):i.toast.message("系统繁忙，请稍后再试!"),i.isLoaddingData=!1}))}catch(a){i.toast.hide(),i.isLoaddingData=!1}}))},getOtherContentHeight:function(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bodyContentHeight";return new Promise((function(r,n){var o=e,a=uni.createSelectorQuery().select("."+i);a.boundingClientRect((function(e){t("log","other Height:"+e.height," at mixins/index.js:118"),o.otherHeight=e.height,e.height,r(e.height)})).exec((function(t){}))}))},setTableHeight:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e||(this.otherHeight=0);try{var i=uni.getSystemInfoSync();return t("log","CustomBar:"+this.CustomBar," at mixins/index.js:134"),this.leftContentHeight=i.windowHeight-this.CustomBar-this.otherHeight-10,this.leftContentHeight}catch(r){}}}};e.default=a}).call(this,i("0de9")["log"])},"65e0":function(t,e,i){"use strict";var r=i("1745"),n=i.n(r);n.a},6677:function(t,e,i){"use strict";i("4160"),i("a434"),i("a9e3"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var t=this;this.grid.children.forEach((function(e,i){e===t&&t.grid.children.splice(i,1)}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};e.default=r},9640:function(t,e,i){"use strict";i.r(e);var r=i("0e2c"),n=i.n(r);for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);e["default"]=n.a},"98fe":function(t,e,i){"use strict";var r=i("4831"),n=i.n(r);n.a},"990e":function(t,e,i){"use strict";i.r(e);var r=i("dac6"),n=i("9640");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("98fe");var a,d=i("f0c5"),s=Object(d["a"])(n["default"],r["b"],r["c"],!1,null,"63e2101f",null,!1,r["a"],a);e["default"]=s.exports},c455:function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return r}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.width?i("v-uni-view",{staticClass:"uni-grid-item",style:"width:"+t.width+";"+(t.square?"height:"+t.width:"")},[i("v-uni-view",{staticClass:"uni-grid-item__box",class:{"uni-grid-item--border":t.showBorder,"uni-grid-item--border-top":t.showBorder&&t.index<t.column,"uni-highlight":t.highlight},style:{"border-right-color":t.borderColor,"border-bottom-color":t.borderColor,"border-top-color":t.borderColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[t._t("default")],2)],1):t._e()},o=[]},c9dc:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={title:"webApp",isRunApp:!1,cookieExpires:1,baseUrl:{dev:"http://192.168.0.218:8080",pro:"http://192.168.0.218:8080"},baseImgUrl:"http://192.168.0.218:8080/clerp-app-api",homeName:"home",plugin:{}};e.default=r},cc95:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-grid-item[data-v-e4b14a34]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex}.uni-grid-item__box[data-v-e4b14a34]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-grid-item--border[data-v-e4b14a34]{position:relative;border-bottom-color:#c8c7cc;border-bottom-style:solid;border-bottom-width:1px;border-right-color:#c8c7cc;border-right-style:solid;border-right-width:1px}.uni-grid-item--border-top[data-v-e4b14a34]{border-top-color:#c8c7cc;border-top-style:solid;border-top-width:1px;height:100%;box-sizing:border-box}.uni-highlight[data-v-e4b14a34]:active{background-color:#f1f1f1}',""]),t.exports=e},dac6:function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return r}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-grid-wrap"},[i("v-uni-view",{ref:"uni-grid",staticClass:"uni-grid",class:{"uni-grid--border":t.showBorder},style:{"border-left-style":"solid","border-left-color":t.borderColor,"border-left-width":t.showBorder?"1px":0},attrs:{id:t.elId}},[t._t("default")],2)],1)},o=[]},f5ee:function(t,e,i){"use strict";i.r(e);var r=i("c455"),n=i("2c75");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("65e0");var a,d=i("f0c5"),s=Object(d["a"])(n["default"],r["b"],r["c"],!1,null,"e4b14a34",null,!1,r["a"],a);e["default"]=s.exports}}]);