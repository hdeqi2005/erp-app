(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-CardboardQuotauota-setpaperQuotation"],{2777:function(t,e,a){"use strict";var i=a("680d"),s=a.n(i);s.a},"5b2c":function(t,e,a){"use strict";var i=a("4ea4");a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("e4fc")),n=i(a("58be")),l=i(a("c8d6")),o=i(a("bcd3")),c=i(a("ee99")),u={components:{cuCustom:l.default,vTable:s.default,uniLoadMore:o.default},mixins:[n.default],data:function(){return{page:{pageNum:1,pageSize:100,showpage:!1},updataLB:"",modeltitle:"",modalName:"",tableclickdata:{},bottomHeight:0,lineCode:{},tableHeight:0,dataTableList:[],dataColumns:[{key:"rownumber",title:"序号",$width:80,titleAlign:"center",columnAlign:"center"},{key:"art_Id",title:"纸质",$width:240,titleAlign:"center",columnAlign:"center"},{key:"art_LB",title:"楞别",$width:215,titleAlign:"center",columnAlign:"center"},{key:"art_Cs",title:"层数",$width:210,titleAlign:"center",columnAlign:"center"}]}},mounted:function(){this.calTableHeight()},methods:{requestCallback:function(t,e){t?(this.page.pageNum=1,this.dataTableList=[],this.modalName="",this.getFromtableData()):(this.modalName="",this.toast.message(e))},getcheckboxval:function(t){var e=this;if(t){var a=this;this.toast.loading();var i={UserID:this.userInfo.erpUserCode,ArtIdStr:t};c.default.post("/warehouse/warehouse/execute/appSPaperArtSetAdd",i).then((function(t){a.requestCallback(t.list[0].res,"新增失败")})).catch((function(t){e.toast.hide(),e.toast.message(t)}))}},updatarequest:function(){var t=this,e={ID1:this.tableclickdata.ID1,UserID:this.userInfo.erpUserCode,IndexNo:this.tableclickdata.IndexNo,art_Id:this.tableclickdata.art_Id,art_LB:this.updataLB},a=this;this.toast.loading(),c.default.post("/warehouse/warehouse/execute/appSPaperArtSetUp",e).then((function(t){a.requestCallback(t.list[0].res,"修改失败")})).catch((function(e){t.toast.hide(),t.toast.message(e)}))},delectrequest:function(t){var e=this,a={ID1:this.tableclickdata.ID1,UserID:this.userInfo.erpUserCode,Flag:t},i=this;c.default.post("/warehouse/warehouse/execute/appSPaperArtSetDel",a).then((function(t){i.requestCallback(t.list[0].res,"删除失败")})).catch((function(t){e.toast.hide(),e.toast.message(t)}))},hideModal:function(){this.modalName="",this.modeltitle="",this.updataLB=""},unifyopenModel:function(t){this.modeltitle=t,this.modalName="DialogModal2"},updateData:function(){if(this.tableclickdata.ID1)return this.updataLB=this.tableclickdata.art_LB,void this.unifyopenModel("修改");this.toast.message("请选择操作数据")},deleteData:function(){if(this.tableclickdata.ID1)return this.updataLB=this.tableclickdata.art_LB,void this.unifyopenModel("是否删除该数据");this.toast.message("请选择操作数据")},clearFromData:function(){this.delectrequest(2)},clickLoadMore:function(){},calTableHeight:function(){var t=this;this.$nextTick((function(){setTimeout((function(){var e=t.setTableHeight(!0);t.tableHeight=e-50,t.getFromtableData()}),200)}))},getFromtableData:function(){var t={UserID:this.userInfo.erpUserCode,pageSize:this.page.pageSize,pageNum:this.page.pageNum};this.toast.loading();var e=this;c.default.post("/warehouse/warehouse/execute/appSPaperArtSetList",t).then((function(t){e.toast.hide(),e.checkFromTabledata(t.list),e.dataTableList=e.dataTableList.concat(t.list),e.tableclickdata={}})).catch((function(t){e.toast.hide(),e.tableclickdata={},e.toast.message(t)}))},checkFromTabledata:function(t){if(t.length<this.page.pageSize)return this.page.showpage=!1,void(this.page.pageNum=1);this.page.showpage=!0,this.page.pageNum++},onSelectionChange:function(t){this.tableclickdata=t.new.item}}};e.default=u},"63a8":function(t,e,a){"use strict";a.r(e);var i=a("fce1"),s=a("c5f0");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("2777");var l,o=a("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"f53299a4",null,!1,i["a"],l);e["default"]=c.exports},"680d":function(t,e,a){var i=a("e951");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("64fc87fe",i,!0,{sourceMap:!1,shadowMode:!1})},c5f0:function(t,e,a){"use strict";a.r(e);var i=a("5b2c"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},e951:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".chucangbtm[data-v-f53299a4]{height:50px;position:fixed;bottom:0;width:100%;background-color:#fff;z-index:2}",""]),t.exports=e},fce1:function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={selectDropdown:a("5c5c").default},s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[a("template",{staticStyle:{height:"30px"},attrs:{slot:"content"},slot:"content"},[t._v("报价纸质设定")])],2),a("v-uni-view",{staticClass:"flex border-top"},[a("v-uni-view",{staticClass:"flex-sub"},[a("selectDropdown",{ref:"lineDrawer",attrs:{otherHeight:t.CustomBarHeight,url:"appArtListSearch",title:"增加纸质",placeholdertext:"",multipleChoice:!0,params:{pageSize:100,pageNum:1}},on:{getcheckboxval:function(e){arguments[0]=e=t.$handleEvent(e),t.getcheckboxval.apply(void 0,arguments)}},model:{value:t.lineCode,callback:function(e){t.lineCode=e},expression:"lineCode"}})],1)],1),a("v-uni-view",{staticClass:"vtable"},[a("v-table",{attrs:{"row-class-name":t.rowClassNameFn,columns:t.dataColumns,list:t.dataTableList,selection:"single","td-width":186,height:t.tableHeight-40},on:{"on-selection-change":function(e){arguments[0]=e=t.$handleEvent(e),t.onSelectionChange.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"chucangbtm"},[a("v-uni-view",{ref:"elBtn",staticClass:"flex solid-bottom padding justify-around elBtn"},[a("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:t.page.showpage,expression:"page.showpage"}],staticClass:"margin-left-custom cu-btn round line-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.searchModeClick("0")}}},[t._v("加载更多")]),a("v-uni-button",{staticClass:"cu-btn lines-blue shadow",attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.updateData.apply(void 0,arguments)}}},[t._v("修改")]),a("v-uni-button",{staticClass:"cu-btn lines-pink shadow",attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteData.apply(void 0,arguments)}}},[t._v("删除")]),a("v-uni-button",{staticClass:"cu-btn lines-red shadow",attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.modalName="DialogModal1"}}},[t._v("清空")])],1)],1),a("v-uni-view",{staticClass:"cu-modal",class:"DialogModal2"==t.modalName?"show":""},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[a("v-uni-view",{staticClass:"content"},[t._v(t._s(t.modeltitle))]),a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),a("v-uni-view",{staticClass:"flex border-top"},[a("v-uni-view",{staticClass:"flex-sub"},[a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("序号:")]),a("v-uni-input",{attrs:{Name:"input",disabled:!0},model:{value:t.tableclickdata.rownumber,callback:function(e){t.$set(t.tableclickdata,"rownumber",e)},expression:"tableclickdata.rownumber"}})],1)],1),a("v-uni-view",{staticClass:"flex-sub"},[a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("纸质:")]),a("v-uni-input",{attrs:{Name:"input",disabled:!0},model:{value:t.tableclickdata.art_Id,callback:function(e){t.$set(t.tableclickdata,"art_Id",e)},expression:"tableclickdata.art_Id"}})],1)],1)],1),a("v-uni-view",{staticClass:"flex border-top"},[a("v-uni-view",{staticClass:"flex-sub"},[a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("层数:")]),a("v-uni-input",{attrs:{Name:"input",disabled:!0},model:{value:t.tableclickdata.art_Cs,callback:function(e){t.$set(t.tableclickdata,"art_Cs",e)},expression:"tableclickdata.art_Cs"}})],1)],1),a("v-uni-view",{staticClass:"flex-sub"},[a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("楞别:")]),a("v-uni-input",{attrs:{Name:"input",disabled:"修改"!==t.modeltitle},model:{value:t.updataLB,callback:function(e){t.updataLB=e},expression:"updataLB"}})],1)],1)],1),a("v-uni-view",{staticClass:"cu-bar bg-white"},[a("v-uni-view",{staticClass:"action margin-0 flex-sub  solid-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("取消")]),a("v-uni-view",{staticClass:"action margin-0 flex-sub text-green solid-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),"修改"===t.modeltitle?t.updatarequest():t.delectrequest(1)}}},[t._v("确定")])],1)],1)],1),a("v-uni-view",{staticClass:"cu-modal",class:"DialogModal1"==t.modalName?"show":""},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[a("v-uni-view",{staticClass:"content"},[t._v("清空")]),a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.modalName=""}}},[a("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),a("v-uni-view",{staticClass:"flex border-top"},[a("v-uni-view",{staticClass:"flex-sub"},[a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-text",[t._v("是否清空全部数据")])],1)],1)],1),a("v-uni-view",{staticClass:"cu-bar bg-white"},[a("v-uni-view",{staticClass:"action margin-0 flex-sub  solid-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.modalName=""}}},[t._v("取消")]),a("v-uni-view",{staticClass:"action margin-0 flex-sub text-green solid-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearFromData.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)],1)},n=[]}}]);