(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-paperOrderDetails-paperOrderDetails"],{"02cc6":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={selectDropdown:n("5c5c").default,uniLoadMore:n("bcd3").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[n("template",{attrs:{slot:"content"},slot:"content"},[t._v("纸板订单明细")]),n("template",{attrs:{slot:"right"},slot:"right"},[n("v-uni-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.condition=!t.condition}}},[t._v("筛选")])],1)],2),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.condition,expression:"condition"}],staticClass:"bodyContentHeight"},[n("v-uni-view",{staticClass:"flex border-top"},[n("v-uni-view",{staticClass:"flex-sub"},[n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-button",{staticClass:"cu-btn  line-blue",style:{color:"week"==t.formItem.type?"red":""},attrs:{disabled:t.isLoaddingData},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.searchDataBy("week")}}},[t._v("本周")]),n("v-uni-button",{staticClass:"cu-btn  line-blue",style:{color:"month"==t.formItem.type?"red":""},attrs:{disabled:t.isLoaddingData},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.searchDataBy("month")}}},[t._v("本月")]),n("v-uni-button",{staticClass:"cu-btn  line-blue",attrs:{disabled:t.isLoaddingData,size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.restfrom()}}},[t._v("清空")]),n("v-uni-button",{staticClass:"cu-btn bg-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.searchDataBy("date")}}},[t._v("查询")])],1)],1)],1),n("v-uni-view",{staticClass:"flex border-top"},[n("v-uni-view",{staticClass:"flex-sub"},[n("selectDropdown",{ref:"customerDrawer",attrs:{otherHeight:t.CustomBarHeight,url:"appGetCustomerList",title:"客ㅤ户",placeholdertext:"请选择客户",params:{UserCode:t.userInfo.erpUserCode,modelCode:"paper_order_item"}},model:{value:t.formItem.guestId,callback:function(e){t.$set(t.formItem,"guestId",e)},expression:"formItem.guestId"}})],1),n("v-uni-view",{staticClass:"flex-sub"},[n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("日期范围:")]),n("v-uni-picker",{attrs:{mode:"date",value:t.formItem.startDate,start:"2015-09-01",end:t.defaultEndDate},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.startDateChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.formItem.startDate))])],1),n("v-uni-text",{staticClass:"margin-left"},[t._v("至")]),n("v-uni-picker",{attrs:{mode:"date",value:t.formItem.endDate,start:"2015-09-01",end:t.defaultEndDate},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.endDateChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.formItem.endDate))])],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"vtable"},[n("v-table",{attrs:{"row-class-name":t.rowClassNameFn,columns:t.dataColumns,list:t.dataTableList,selection:"single","td-width":174,height:t.tableHeight-35}})],1),n("v-uni-view",{staticClass:"flex border-top",staticStyle:{height:"15rpx"}},[n("v-uni-view",{staticClass:"flex-sub"},[n("v-uni-view",{staticClass:"cu-form-group"},[t.hiddenLoadMore?t._e():n("uni-load-more",{attrs:{contentText:t.contentText,status:t.more},on:{clickLoadMore:function(e){arguments[0]=e=t.$handleEvent(e),t.clickLoadMore.apply(void 0,arguments)}}})],1)],1)],1)],1)},r=[]},"0ade":function(t,e,n){"use strict";n.r(e);var i=n("3563"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"0ccb":function(t,e,n){var i=n("50c4"),a=n("1148"),r=n("1d80"),o=Math.ceil,s=function(t){return function(e,n,s){var u,c,l=String(r(e)),d=l.length,h=void 0===s?" ":String(s),f=i(n);return f<=d||""==h?l:(u=f-d,c=a.call(h,o(u/h.length)),c.length>u&&(c=c.slice(0,u)),t?l+c:c+l)}};t.exports={start:s(!1),end:s(!0)}},3563:function(t,e,n){"use strict";var i=n("4ea4");n("99af"),n("d81d"),n("fb6a"),n("a9e3"),n("b680"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("bcd3")),r=i(n("5c5c")),o=i(n("a44c")),s=i(n("e4fc")),u=i(n("58be")),c=i(n("c8d6")),l={more:"more",loading:"loading",noMore:"noMore"},d={type:"",searchMode:"0",startDate:(0,o.default)().subtract(1,"month").format("YYYY-MM-DD"),endDate:(0,o.default)().format("YYYY-MM-DD"),guestName:"",guestId:"",businessName:"",businessId:""},h={components:{cuCustom:c.default,vTable:s.default,selectDropdown:r.default,uniLoadMore:a.default},mixins:[u.default],data:function(){return{condition:!1,contentText:{contentdown:"点击显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"},sumMoney:0,isFilterDataByPage:!1,pageSize:20,pageNum:1,hiddenLoadMore:!0,more:l.more,formItem:Object.assign({},d),defaultEndDate:(0,o.default)().format("YYYY-MM-DD"),avgWidth:10,tableHeight:0,dataTableList:[],dataColumns:[{key:"ct_Desc",title:"客户",$width:300,titleAlign:"center",columnAlign:"center"},{key:"co_No",title:"订单号",$width:200,titleAlign:"center",columnAlign:"right"},{key:"co_Date",title:"订期",$width:100,titleAlign:"center",columnAlign:"right"},{key:"co_DueDate",title:"交期",$width:100,titleAlign:"center",columnAlign:"right"},{key:"Size",title:"规格",$width:400,titleAlign:"center",columnAlign:"center"},{key:"co_Qty",title:"订单数",$width:120,titleAlign:"center",columnAlign:"right"},{key:"co_PCQty",title:"排产数",$width:120,titleAlign:"center",columnAlign:"right"},{key:"co_INQty",title:"入库数",$width:120,titleAlign:"center",columnAlign:"right"},{key:"co_CLQty",title:"装车数",$width:120,titleAlign:"center",columnAlign:"right"},{key:"co_OutQty",title:"送货数",$width:120,titleAlign:"center",columnAlign:"right"},{key:"co_StoreQty",title:"库存数",$width:120,titleAlign:"center",columnAlign:"right"},{key:"co_CustPo",title:"客户PO",$width:300,titleAlign:"center",columnAlign:"center"},{key:"co_Oremark",title:"生产备注",$width:400,titleAlign:"center",columnAlign:"center"},{key:"co_Remark",title:"送货备注",$width:400,titleAlign:"center",columnAlign:"center"}]}},computed:{},mounted:function(){plus.screen.lockOrientation("landscape-secondary"),this.avgWidth=this.getTableAvgWidth(this.dataColumns),this.calTableHeight()},methods:{togglePopup:function(t,e){var n=this;switch(t){case"top":this.content="顶部弹出 popup";break;case"bottom":this.content="底部弹出 popup";break;case"center":this.content="居中弹出 popup";break}this.type=t,this.$nextTick((function(){n.$refs["show"+e].open()}))},restfrom:function(){this.formItem.guestId="",this.formItem.businessId="",this.$refs.customerDrawer.$data.formItem.customers="",this.$refs.customerDrawer.$data.formItem.customersId="",this.dataTableList=[]},rowClassNameFn:function(t,e){return Number(e)%2==0?"table-single-row":""},clickLoadMore:function(t){this.more=l.loading,this.isFilterDataByPage=!0,this.pageSetting.current=this.pageSetting.current+1,this.loaddingData()},ValidateData:function(){var t=!1;return this.formItem.searchMode||(this.toast.message("请选择搜索模式"),t=!0),t},searchDataBy:function(t){if(!this.ValidateData()){this.formItem.type="";var e=new Date,n=e.getDate()-1,i=(new Date).getDay()-1;switch(t){case"week":this.formItem.type="week",this.formItem.startDate=(0,o.default)().subtract(i,"day").format("YYYY-MM-DD"),this.formItem.endDate=(0,o.default)().format("YYYY-MM-DD");break;case"month":this.formItem.type="month",this.formItem.startDate=(0,o.default)().subtract(n,"day").format("YYYY-MM-DD"),this.formItem.endDate=(0,o.default)().format("YYYY-MM-DD");break;default:break}this.loaddingData()}},loaddingData:function(){var t=this;this.isFilterDataByPage||(this.dataTableList=[],this.pageSetting.current=1),this.sumMoney=0,this.toast.loading();var e="/warehouse/warehouse/execute/appSpPaperCOQueryNew",n={From:this.formItem.startDate,To:this.formItem.endDate,Cust:this.formItem.guestId,UserID:this.userInfo.erpUserCode,pageSize:this.pageSetting.pageSize,pageNum:this.pageSetting.current};this.getOrPostDataBy(e,n).then((function(e){e&&e.list.length>0?(t.doSomeLogicWhenDataNotNull(t.handleData(e.list)),t.condition=!1,t.toast.hide()):(t.more=l.noMore,t.hiddenLoadMore=!0,t.isFilterDataByPage?(t.toast.hide(),t.toast.message("暂无更多数据...")):(t.toast.hide(),t.toast.message("暂无数据..."))),t.isFilterDataByPage=!1}))},handleData:function(t){for(var e=0;e<t.length;e++)t[e].ct_Desc=t[e].co_CustId+"-"+t[e].ct_Desc,t[e].co_Date=t[e].co_Date.slice(5),t[e].co_DueDate=t[e].co_DueDate.slice(5),t[e].Size=t[e].co_ArtId+"/"+t[e].co_ArtLB+" "+t[e].Size.replace(/\s*/g,"");return t},doSomeLogicWhenDataNotNull:function(t){this.dataTableList.length;this.more=l.more,this.hiddenLoadMore=!1,t.length<20&&(this.hiddenLoadMore=!0);var e=this.dataTableList.concat(t);this.dataTableList=e},formatDataListBy:function(t){var e=this;return t&&Array.isArray(t)&&t.length>0&&(t=t.map((function(t){return t.co_Money&&(t.co_Money=e.addThousandthSign(Number(t.co_Money.toFixed(2)))),t.pd_Money&&(t.pd_Money=e.addThousandthSign(Number(t.pd_Money.toFixed(2)))),t.RemainCredit&&(t.RemainCredit=e.addThousandthSign(Number(t.RemainCredit.toFixed(2)))),t}))),t},startDateChange:function(t){this.formItem.startDate=t.detail.value},endDateChange:function(t){this.formItem.endDate=t.detail.value},calTableHeight:function(){var t=this;this.$nextTick((function(){t.getOtherContentHeight(),setTimeout((function(){var e=t.setTableHeight(!0);t.tableHeight=e}),200)}))}}};e.default=h},"64e5":function(t,e,n){"use strict";var i=n("d039"),a=n("0ccb").start,r=Math.abs,o=Date.prototype,s=o.getTime,u=o.toISOString;t.exports=i((function(){return"0385-07-25T07:06:39.999Z"!=u.call(new Date(-50000000000001))}))||!i((function(){u.call(new Date(NaN))}))?function(){if(!isFinite(s.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),n=t.getUTCMilliseconds(),i=e<0?"-":e>9999?"+":"";return i+a(r(e),i?6:4,0)+"-"+a(t.getUTCMonth()+1,2,0)+"-"+a(t.getUTCDate(),2,0)+"T"+a(t.getUTCHours(),2,0)+":"+a(t.getUTCMinutes(),2,0)+":"+a(t.getUTCSeconds(),2,0)+"."+a(n,3,0)+"Z"}:u},a44c:function(t,e,n){n("a15b"),n("fb6a"),n("accc"),n("f4b3"),n("a9e3"),n("d3b7"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("1276"),n("bf19"),function(e,n){t.exports=n()}(0,(function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",a="day",r="week",o="month",s="quarter",u="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},h={s:d,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+d(i,2,"0")+":"+d(a,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),i=t.clone().add(n,o),a=e-i<0,r=t.clone().add(n+(a?-1:1),o);return Number(-(n+(e-i)/(a?i-r:r-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:o,y:u,w:r,d:a,h:i,m:n,s:e,ms:t,Q:s}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m="en",g={};g[m]=f;var v=function(t){return t instanceof y},p=function(t,e,n){var i;if(!t)return m;if("string"==typeof t)g[t]&&(i=t),e&&(g[t]=e,i=t);else{var a=t.name;g[a]=t,i=a}return n||(m=i),i},D=function(t,e,n){if(v(t))return t.clone();var i=e?"string"==typeof e?{format:e,pl:n}:e:{};return i.date=t,new y(i)},$=h;$.l=p,$.i=v,$.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u})};var y=function(){function d(t){this.$L=this.$L||p(t.locale,null,!0),this.parse(t)}var h=d.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if($.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(c);if(i)return n?new Date(Date.UTC(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)):new Date(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)}return new Date(e)}(t),this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return $},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return D(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<D(t)},h.$g=function(t,e,n){return $.u(t)?this[e]:this.set(n,t)},h.year=function(t){return this.$g(t,"$y",u)},h.month=function(t){return this.$g(t,"$M",o)},h.day=function(t){return this.$g(t,"$W",a)},h.date=function(t){return this.$g(t,"$D","date")},h.hour=function(t){return this.$g(t,"$H",i)},h.minute=function(t){return this.$g(t,"$m",n)},h.second=function(t){return this.$g(t,"$s",e)},h.millisecond=function(e){return this.$g(e,"$ms",t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,s){var c=this,l=!!$.u(s)||s,d=$.p(t),h=function(t,e){var n=$.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return l?n:n.endOf(a)},f=function(t,e){return $.w(c.toDate()[t].apply(c.toDate(),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},m=this.$W,g=this.$M,v=this.$D,p="set"+(this.$u?"UTC":"");switch(d){case u:return l?h(1,0):h(31,11);case o:return l?h(1,g):h(0,g+1);case r:var D=this.$locale().weekStart||0,y=(m<D?m+7:m)-D;return h(l?v-y:v+(6-y),g);case a:case"date":return f(p+"Hours",0);case i:return f(p+"Minutes",1);case n:return f(p+"Seconds",2);case e:return f(p+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(r,s){var c,l=$.p(r),d="set"+(this.$u?"UTC":""),h=(c={},c[a]=d+"Date",c.date=d+"Date",c[o]=d+"Month",c[u]=d+"FullYear",c[i]=d+"Hours",c[n]=d+"Minutes",c[e]=d+"Seconds",c[t]=d+"Milliseconds",c)[l],f=l===a?this.$D+(s-this.$W):s;if(l===o||l===u){var m=this.clone().set("date",1);m.$d[h](f),m.init(),this.$d=m.set("date",Math.min(this.$D,m.daysInMonth())).toDate()}else h&&this.$d[h](f);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[$.p(t)]()},h.add=function(t,s){var c,l=this;t=Number(t);var d=$.p(s),h=function(e){var n=D(l);return $.w(n.date(n.date()+Math.round(e*t)),l)};if(d===o)return this.set(o,this.$M+t);if(d===u)return this.set(u,this.$y+t);if(d===a)return h(1);if(d===r)return h(7);var f=(c={},c[n]=6e4,c[i]=36e5,c[e]=1e3,c)[d]||1,m=this.valueOf()+t*f;return $.w(m,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=$.z(this),a=this.$locale(),r=this.$H,o=this.$m,s=this.$M,u=a.weekdays,c=a.months,d=function(t,i,a,r){return t&&(t[i]||t(e,n))||a[i].substr(0,r)},h=function(t){return $.s(r%12||12,t,"0")},f=a.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:$.s(s+1,2,"0"),MMM:d(a.monthsShort,s,c,3),MMMM:c[s]||c(this,n),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:d(a.weekdaysMin,this.$W,u,2),ddd:d(a.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(r),HH:$.s(r,2,"0"),h:h(1),hh:h(2),a:f(r,o,!0),A:f(r,o,!1),m:String(o),mm:$.s(o,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:i};return n.replace(l,(function(t,e){return e||m[t]||i.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,c,l){var d,h=$.p(c),f=D(t),m=6e4*(f.utcOffset()-this.utcOffset()),g=this-f,v=$.m(this,f);return v=(d={},d[u]=v/12,d[o]=v,d[s]=v/3,d[r]=(g-m)/6048e5,d[a]=(g-m)/864e5,d[i]=g/36e5,d[n]=g/6e4,d[e]=g/1e3,d)[h]||g,l?v:$.a(v)},h.daysInMonth=function(){return this.endOf(o).$D},h.$locale=function(){return g[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone();return n.$L=p(t,e,!0),n},h.clone=function(){return $.w(this.toDate(),this)},h.toDate=function(){return new Date(this.$d)},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},d}();return D.prototype=y.prototype,D.extend=function(t,e){return t(e,y,D),D},D.locale=p,D.isDayjs=v,D.unix=function(t){return D(1e3*t)},D.en=g[m],D.Ls=g,D}))},accc:function(t,e,n){var i=n("23e7"),a=n("64e5");i({target:"Date",proto:!0,forced:Date.prototype.toISOString!==a},{toISOString:a})},adac:function(t,e,n){"use strict";n.r(e);var i=n("02cc6"),a=n("0ade");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("b61e");var o,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"ce444992",null,!1,i["a"],o);e["default"]=u.exports},b61e:function(t,e,n){"use strict";var i=n("e59f"),a=n.n(i);a.a},bf19:function(t,e,n){"use strict";var i=n("23e7");i({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},e59f:function(t,e,n){var i=n("f163");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("383f855d",i,!0,{sourceMap:!1,shadowMode:!1})},f163:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".margin-left-custom[data-v-ce444992]{margin-left:%?10?%}.cu-form-group uni-picker .picker[data-v-ce444992]{line-height:30px!important}.cu-form-group uni-picker[data-v-ce444992]::after{line-height:30px!important}.border-top[data-v-ce444992]{border-top:1px solid #eee}",""]),t.exports=e},f4b3:function(t,e,n){"use strict";var i=n("23e7"),a=n("d039"),r=n("7b0b"),o=n("c04e"),s=a((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}));i({target:"Date",proto:!0,forced:s},{toJSON:function(t){var e=r(this),n=o(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})}}]);