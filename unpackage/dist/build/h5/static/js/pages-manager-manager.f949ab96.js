(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manager-manager"],{"06c5":function(t,i,e){"use strict";e("a630"),e("fb6a"),e("d3b7"),e("25f0"),e("3ca3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=s;var n=a(e("6b75"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t,i){if(t){if("string"===typeof t)return(0,n.default)(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?(0,n.default)(t,i):void 0}}},"1c15":function(t,i,e){"use strict";e.r(i);var n=e("4b72"),a=e("50cf");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("c347");var r,u=e("f0c5"),v=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"23733d8f",null,!1,n["a"],r);i["default"]=v.exports},2909:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=v;var n=u(e("6005")),a=u(e("db90")),s=u(e("06c5")),r=u(e("3427"));function u(t){return t&&t.__esModule?t:{default:t}}function v(t){return(0,n.default)(t)||(0,a.default)(t)||(0,s.default)(t)||(0,r.default)()}},3427:function(t,i,e){"use strict";function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(i,"__esModule",{value:!0}),i.default=n},4588:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".margin-left-custom[data-v-23733d8f]{margin-left:8px}.window-bottom[data-v-23733d8f]{height:%?100?%}.marginBottom10[data-v-23733d8f]{margin-bottom:%?10?%}.price-mini-panel[data-v-23733d8f]{margin-bottom:%?30?%}.grid-title[data-v-23733d8f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.text-price[data-v-23733d8f]{color:#0081ff;font-size:%?40?%}.text-area[data-v-23733d8f]{color:#0081ff;font-size:%?40?%}",""]),t.exports=i},"4b72":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var n={uniGrid:e("990e").default,uniGridItem:e("f5ee").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!1}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v("看板")])],2),e("v-uni-view",[e("v-uni-view",{staticClass:"grid-warp"},[e("v-uni-view",{staticClass:"grid-title"},[t._v("本月资金情况")]),e("v-uni-view",{staticClass:"grid-body",staticStyle:{padding:"10rpx"}},[e("uni-grid",{attrs:{column:2,square:!1,highlight:!1,showBorder:!1}},[e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel margin-left-custom"},[e("v-uni-view",{staticClass:"marginBottom10"},[e("v-uni-text",{staticClass:"text"},[t._v("订单金额")])],1),e("v-uni-view",{staticClass:"text-price"},[t._v(t._s(t.toThousands(0==t.currentBriefReport.length?"":t.currentBriefReport[0].Amount)))])],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel margin-left-custom"},[e("v-uni-view",{staticClass:"marginBottom10"},[e("v-uni-text",{staticClass:"text"},[t._v("送货金额")])],1),e("v-uni-view",{staticClass:"text-price"},[t._v(t._s(t.toThousands(0==t.currentBriefReport.length?"":t.currentBriefReport[0].Amount)))])],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel margin-left-custom"},[e("v-uni-view",{staticClass:"marginBottom10"},[e("v-uni-text",{staticClass:"text"},[t._v("原纸入库金额")])],1),e("v-uni-view",{staticClass:"text-price"},[t._v(t._s(t.toThousands(0==t.currentBriefReport.length?"":t.currentBriefReport[0].inamt)))])],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel margin-left-custom"},[e("v-uni-view",{staticClass:"marginBottom10"},[e("v-uni-text",{staticClass:"text"},[t._v("辅料送货金额")])],1),e("v-uni-view",{staticClass:"text-price"},[t._v(t._s(t.toThousands(0==t.currentBriefReport.length?"":t.currentBriefReport[0].inamt)))])],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel margin-left-custom"},[e("v-uni-view",{staticClass:"marginBottom10"},[e("v-uni-text",{staticClass:"text"},[t._v("收入金额")])],1),e("v-uni-view",{staticClass:"text-price"},[t._v(t._s(t.toThousands(0==t.currentBriefReport.length?"":t.currentBriefReport[0].Gathering_Amount)))])],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel margin-left-custom"},[e("v-uni-view",{staticClass:"marginBottom10"},[e("v-uni-text",{staticClass:"text"},[t._v("生产面积")])],1),e("v-uni-view",{staticClass:"text-area"},[t._v(t._s(t.toThousands(0==t.currentBriefReport.length?"":t.currentBriefReport[0].Area)))])],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel margin-left-custom"},[e("v-uni-view",{staticClass:"marginBottom10"},[e("v-uni-text",{staticClass:"text"},[t._v("运费金额")])],1),e("v-uni-view",{staticClass:"text-price"},[t._v(t._s(t.toThousands(0==t.currentBriefReport.length?"":t.currentBriefReport[6].TranFee_Amount)))])],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel margin-left-custom"},[e("v-uni-view",{staticClass:"marginBottom10"},[e("v-uni-text",{staticClass:"text"},[t._v("原纸出库金额")])],1),e("v-uni-view",{staticClass:"text-price"},[t._v(t._s(t.toThousands(0==t.currentBriefReport.length?"":t.currentBriefReport[3].outamt)))])],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel margin-left-custom"},[e("v-uni-view",{staticClass:"marginBottom10"},[e("v-uni-text",{staticClass:"text"},[t._v("辅料出库金额")])],1),e("v-uni-view",{staticClass:"text-price"},[t._v(t._s(t.toThousands(0==t.currentBriefReport.length?"":t.currentBriefReport[0].outamt)))])],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel margin-left-custom"},[e("v-uni-view",{staticClass:"marginBottom10"},[e("v-uni-text",{staticClass:"text"},[t._v("收支支出金额")])],1),e("v-uni-view",{staticClass:"text-price"},[t._v(t._s(t.toThousands(0==t.currentBriefReport.length?"":t.currentBriefReport[0].SPay_Amount)))])],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"grid-warp"},[e("v-uni-view",{staticClass:"grid-title",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleLink("order",t.totalReport[0])}}},[t._v("本月订单"),e("v-uni-text",{staticClass:"cuIcon-right"})],1),e("v-uni-view",{staticClass:"grid-body"},[e("v-uni-view",[e("uni-grid",{attrs:{column:4,square:!1,highlight:!1,showBorder:!1}},[e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"})],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v("数量")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v("面积")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v("金额")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text margin-left"},[t._v("月累计")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthOrderByType(t.totalReport[0],"Qty",0))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthOrderByType(t.totalReport[0],"Area",0))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthOrderByType(t.totalReport[0],"Aoumt",0))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text margin-left"},[t._v("月平均")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthOrderByType(t.totalReport[0],"Qty_avg",0))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthOrderByType(t.totalReport[0],"Area_avg",0))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthOrderByType(t.totalReport[0],"Aoumt_avg",0))))])],1)],1)],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"grid-warp"},[e("v-uni-view",{staticClass:"grid-title",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleLink("production",t.totalReport[1])}}},[t._v("本月生产"),e("v-uni-text",{staticClass:"cuIcon-right"})],1),e("v-uni-view",{staticClass:"grid-body"},[e("v-uni-view",[e("uni-grid",{attrs:{column:4,square:!1,highlight:!1,showBorder:!1}},[e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"})],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v("数量")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v("面积")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v("米数")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text margin-left"},[t._v("月累计")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthProductionByType(t.totalReport[1],"Qty",1))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthProductionByType(t.totalReport[1],"Area",1))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthProductionByType(t.totalReport[1],"Long",1))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text margin-left"},[t._v("月平均")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthProductionByType(t.totalReport[1],"Qty_avg",1))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthProductionByType(t.totalReport[1],"Area_avg",1))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthProductionByType(t.totalReport[1],"Long_avg",1))))])],1)],1)],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"grid-warp"},[e("v-uni-view",{staticClass:"grid-title",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleLink("delivery",t.totalReport[2])}}},[t._v("本月送货"),e("v-uni-text",{staticClass:"cuIcon-right"})],1),e("v-uni-view",{staticClass:"grid-body"},[e("v-uni-view",[e("uni-grid",{attrs:{column:4,square:!1,highlight:!1,showBorder:!1}},[e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"})],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v("数量")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v("面积")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v("金额")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text margin-left"},[t._v("月累计")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[2],"Qty"))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[2],"Area"))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[2],"Amount"))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text margin-left"},[t._v("月平均")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[2],"Qty_avg"))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[2],"Area_avg"))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[2],"Amount_avg"))))])],1)],1)],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"grid-warp"},[e("v-uni-view",{staticClass:"grid-title",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleLink("basePaper",t.totalReport[3])}}},[t._v("本月原纸"),e("v-uni-text",{staticClass:"cuIcon-right"})],1),e("v-uni-view",{staticClass:"grid-body"},[e("v-uni-view",[e("uni-grid",{attrs:{column:5,square:!1,highlight:!1,showBorder:!1}},[e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"})],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v("入库总量")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v("入库金额")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v("出库总量")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v("出库金额")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text margin-left"},[t._v("月累计")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[3],"inwt"))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[3],"inamt"))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[3],"outwt"))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[3],"outamt"))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text margin-left"},[t._v("月平均")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[3],"inwt_avg"))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[3],"inamt_avg"))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[3],"outwt_avg"))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[3],"outamt_avg"))))])],1)],1)],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"grid-warp"},[e("v-uni-view",{staticClass:"grid-title",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleLink("subMaterial",t.totalReport[4])}}},[t._v("本月辅料"),e("v-uni-text",{staticClass:"cuIcon-right"})],1),e("v-uni-view",{staticClass:"grid-body"},[e("v-uni-view",[e("uni-grid",{attrs:{column:3,square:!1,highlight:!1,showBorder:!1}},[e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"})],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v("入库金额")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v("出库金额")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text margin-left"},[t._v("月累计")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthSubMaterial(t.totalReport[4],"inamt"))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthSubMaterial(t.totalReport[4],"outamt"))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text margin-left"},[t._v("月平均")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthSubMaterial(t.totalReport[4],"inamt_avg"))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthSubMaterial(t.totalReport[4],"outamt_avg"))))])],1)],1)],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"grid-warp"},[e("v-uni-view",{staticClass:"grid-title",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleLink("inoutCome",t.totalReport[5])}}},[t._v("本月收支"),e("v-uni-text",{staticClass:"cuIcon-right"})],1),e("v-uni-view",{staticClass:"grid-body"},[e("v-uni-view",[e("uni-grid",{attrs:{column:3,square:!1,highlight:!1,showBorder:!1}},[e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"})],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v("收入")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v("支出")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text margin-left"},[t._v("月累计")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthInOutCome(t.totalReport[5],"SPay_Amount"))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthInOutCome(t.totalReport[5],"Gathering_Amount"))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text margin-left"},[t._v("月平均")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthInOutCome(t.totalReport[5],"SPay_Amount_avg"))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthInOutCome(t.totalReport[5],"Gathering_Amount_avg"))))])],1)],1)],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"grid-warp"},[e("v-uni-view",{staticClass:"grid-title",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleLink("transportation",t.totalReport[6])}}},[t._v("本月运输"),e("v-uni-text",{staticClass:"cuIcon-right"})],1),e("v-uni-view",{staticClass:"grid-body"},[e("v-uni-view",[e("uni-grid",{attrs:{column:3,square:!1,highlight:!1,showBorder:!1}},[e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"})],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v("运费")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"})],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text margin-left"},[t._v("月累计")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthTransportation(t.totalReport[6],"TranFee_Amount"))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"})],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text margin-left"},[t._v("月平均")])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthTransportation(t.totalReport[6],"TranFee_Amount_avg"))))])],1)],1)],1),e("uni-grid-item",[e("v-uni-view",{staticClass:"price-mini-panel"},[e("v-uni-view",[e("v-uni-text",{staticClass:"text"})],1)],1)],1)],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"window-bottom"})],1)},s=[]},"50cf":function(t,i,e){"use strict";e.r(i);var n=e("9dcc"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},6005:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=s;var n=a(e("6b75"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t){if(Array.isArray(t))return(0,n.default)(t)}},"6b75":function(t,i,e){"use strict";function n(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}Object.defineProperty(i,"__esModule",{value:!0}),i.default=n},"8a7b":function(t,i,e){var n=e("4588");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("666d2586",n,!0,{sourceMap:!1,shadowMode:!1})},"9dcc":function(t,i,e){"use strict";var n=e("4ea4");e("4160"),e("fb6a"),e("a9e3"),e("b680"),e("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("2909")),s=n(e("58be")),r=n(e("0526")),u=n(e("990e")),v=n(e("f5ee")),l=(e("2f62"),n(e("c8d6"))),o={components:{cuCustom:l.default,uniGrid:u.default,uniGridItem:v.default,uniIcon:r.default},mixins:[s.default],data:function(){return{pageTitle:"全厂综合查询",legendData:["面积","金额",""],actived:["1"],currentMode:"0",dataSource:[],currentTextOfReport:"",currentTitlefReport:"",barData:[],popupShow:!1,currentBriefReport:[],totalReport:[]}},mounted:function(){this.getDataSource()},methods:{handleLink:function(t,i){switch(this.legendData=["面积","金额","","",""],this.popupShow=!0,this.barData=i,this.dataSource=i,t){case"order":this.currentMode="0",this.currentTitlefReport="本月订单",this.currentTextOfReport="订单(面积、金额)对照";break;case"production":this.currentMode="1",this.legendData=["面积","米数",""],this.currentTitlefReport="本月生产",this.currentTextOfReport="生产(面积、米数)对照";break;case"delivery":this.currentMode="0",this.currentTitlefReport="本月送货",this.currentTextOfReport="送货(面积、金额)对照";break;case"basePaper":this.currentMode="3",this.legendData=["","入库金额","出库金额","入库重量","出库重量"],this.currentTitlefReport="本月原纸",this.currentTextOfReport="原纸(金额)对照";break;case"subMaterial":this.currentMode="4",this.legendData=["","入库金额","出库金额","",""],this.currentTitlefReport="本月辅料",this.currentTextOfReport="辅料(金额)对照";break;case"inoutCome":this.currentMode="5",this.legendData=["","收入","支出","",""],this.currentTitlefReport="本月收支",this.currentTextOfReport="收支(金额)对照";break;case"transportation":this.currentMode="6",this.legendData=["","金额","","",""],this.currentTitlefReport="本月运输",this.currentTextOfReport="运输(金额)对照";break}i&&Array.isArray(i)&&this.$store.commit("setTempChartData",i),this.router.navigate("/pages/manager/managerDetail?type="+t)},handleCurrentMonthTransportation:function(t,i){if(0==t.length)return"";switch(i){case"TranFee_Amount":return t.slice(-2,-1)[0].TranFee_Amount;case"TranFee_Amount_avg":return t.slice(-1)[0].TranFee_Amount}},handleCurrentMonthInOutCome:function(t,i){if(0==t.length)return"";switch(i){case"SPay_Amount":return t.slice(-2,-1)[0].SPay_Amount;case"Gathering_Amount":return t.slice(-2,-1)[0].Gathering_Amount;case"SPay_Amount_avg":return t.slice(-1)[0].SPay_Amount;case"Gathering_Amount_avg":return t.slice(1)[0].Gathering_Amount}},handleCurrentMonthSubMaterial:function(t,i){this.handleCurrentMonthBasePaperByType(t,i)},handleCurrentMonthBasePaperByType:function(t,i,e){if(0==t.length)return"";switch(i){case"inwt":return t.slice(-2,-1)[0].inwt;case"inamt":return t.slice(-2,-1)[0].inamt;case"outwt":return t.slice(-2,-1)[0].outwt;case"outamt":return t.slice(-2,-1)[0].outamt;case"inwt_avg":return t.slice(-1)[0].inwt;case"inamt_avg":return t.slice(-1)[0].inamt;case"outwt_avg":return t.slice(-1)[0].outwt;case"outamt_avg":return t.slice(-1)[0].outamt}},handleCurrentMonthDeliveryByType:function(t,i){this.handleCurrentMonthOrderByType(t,i)},handleCurrentMonthProductionByType:function(t,i,e){if(0==t.length)return"";var n=[];switch(i){case"Long":return n=t.slice(-2,-1)[0].Long,n;case"Area":return n=t.slice(-2,-1)[0].Area,n;case"Qty":return n=t.slice(-2,-1)[0].Qty,n;case"Long_avg":return n=t.slice(-1)[0].Long,n;case"Area_avg":return n=t.slice(-1)[0].Area,n;case"Qty_avg":return n=t.slice(-1)[0].Qty,n}},handleCurrentMonthOrderByType:function(t,i,e){if(0==t.length)return"";switch(i){case"Aoumt":return t.slice(-2,-1)[0].Aoumt;case"Area":return t.slice(-2,-1)[0].Area;case"Qty":return t.slice(-2,-1)[0].Qty;case"Aoumt_avg":return t.slice(-1)[0].Aoumt;case"Area_avg":return t.slice(-1)[0].Area;case"Qty_avg":return t.slice(-1)[0].Qty}},getCurrentBriefReportData:function(t){var i=this;return t.forEach((function(t){var e;(e=i.currentBriefReport).push.apply(e,(0,a.default)(t.slice(-2,-1)))})),this.currentBriefReport},getDataSource:function(){var t="/report/appSpGetFactoryKanban",i={},e=this;this.getOrPostDataBy(t,i).then((function(t){e.totalReport=t,e.getCurrentBriefReportData(t)}))},toThousands:function(t){return null==t||""==t||0==t?"0.00":Number(t).toFixed(2)}}};i.default=o},c347:function(t,i,e){"use strict";var n=e("8a7b"),a=e.n(n);a.a},db90:function(t,i,e){"use strict";function n(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}e("a4d3"),e("e01a"),e("d28b"),e("a630"),e("d3b7"),e("3ca3"),e("ddb0"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=n}}]);