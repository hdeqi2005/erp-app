<template>
	<view>
		<cu-custom class="titlefrom" bgColor="bg-gradual-blue" :isBack="true"><block slot="content">原纸库存查询</block></cu-custom>
		<form class="xunhoutop">
			<view class="bodyContentHeight">
				<view class="flex border-top">
					<view class="flex-sub">
						<!-- 制造商 -->
						<selectDropdown
							:otherHeight='CustomBarHeight'
							title="制造商"
							url="appFindVendor"
							ref="customerDrawer" 
							v-model="paperStoreItem.Vend"
							placeholdertext="请选择制造商"
						></selectDropdown>
							<!-- <customerSelect :otherHeight='otherHeight' ></customerSelect> -->
					</view>
					<view class="flex-sub">
						<selectDropdown
							:otherHeight='CustomBarHeight'
							title="门ㅤ幅"
							url="appFindPaperLimit"
							ref="findPaperLimit" 
							v-model="paperStoreItem.Width"
							placeholdertext="ㅤ请选择门幅"
						></selectDropdown>
					</view>
				</view>
				<view class="flex border-top">
					<view class="flex-sub">
						<selectDropdown
							:otherHeight='CustomBarHeight'
							title="类ㅤ型"
							url="appFindSPaperType"
							ref="customertype"
							v-model="paperStoreItem.Type"
							placeholdertext="请选择类型"
						></selectDropdown>
					</view>
					<view class="flex-sub">
						<view class="cu-form-group">
							<view class="title">克ㅤ重:</view>
							<input  v-model="paperStoreItem.Gram" placeholder="请输入克重" />
						</view>
					</view>
				</view>
				<view class="cu-form-group border-top">
					<view class="title">卷ㅤ号:</view>
					<input v-model="paperStoreItem.Coil" placeholder="请输入卷号" name="input" />
					<button @click="turnOnScanCode" type="primary" size="mini">扫描</button>
				</view>
			</view>
		</form>
		<view style="height: 120px;"></view>
		<!-- 数据查询列表 -->
		<view  class="grid-warp" v-for="(item,index) in fromdata" :key='index'>
			<view class="grid-title">
				<view>卷号:{{item.CoilNo}}</view>
				<view>仓位:{{item.StationName}}</view>
			</view>
			<view class="grid-body">
				<view class="grid-flex padding-10">
					<view>
						<text>供应商：{{item.VendorName}}</text>
					</view>
					<view>
						<text>重量：{{item.Ewt}}</text>
					</view>
				</view>
				<view class="grid-flex padding-10">
					<view>
						<text>类ㅤ型：{{item.SPaperName}}</text>
					</view>
					<view>
						<text>门幅：{{item.Width}}</text>
					</view>
				</view>
				<!-- 只在客户为梧州花城显示这个字段 -->
				<view class="grid-flex padding-10" v-if="!!fromdata[0].Grade">
					<view>
						<text>原纸级别：{{item.Grade}}</text>
					</view>
				</view>
			</view>
		</view>
		<view style="height: 80px;"></view>
		<!-- 底部按钮 -->
		<view class="chucangbtm">
			<view class="flex solid-bottom padding justify-around elBtn" ref="elBtn">
				<view>	<button @click="resetFrom"  type="primary" size="mini" class="bg-grey radius">清除</button></view>
				<view style="margin-top: 5px;"> <text>总卷数:{{numbertext}}</text>	</view>
				<view>	<button @click="paprtIn"  type="primary" size="mini" class="bg-grey radius">搜索</button></view>
			</view>
		</view>
	</view>
</template>

<script>
import selectDropdown from '@/components/selectDropdown/selectDropdown.vue'
import typeselect from './typeselect.vue'
import zTable from '@/components/z-table/z-table.vue';
import cuCustom from '@/ui/colorui/components/cu-custom.vue';
import request from '@/utils/request.js';
import dateFormat from '@/utils/dateFormat.js';
import warehouse from '@/mixins';
export default {
	name: 'paperOB', ///原纸出退仓
	mixins: [warehouse],
	components: { zTable, cuCustom,   typeselect, selectDropdown },
	data() {
		return {
			// otherHeight:0,//title高度
			dataSource:[],//数据源
			numbertext:0,//总卷数
			errorContent: '暂无数据', //'数据加载中...',
			tableHeight: 500, //表格高度
			fromdata:[],//数据查询列表
			showpage:true,//是否分页查询
			paperStoreItem: {
				Vend:'',//制造商
				Width:'',//门幅
				Type:'',//类型
				Station: '',//--仓位 
				Gram: '',//克重
				Coil: '',//卷号
				pageSize:20,
				pageNum:1
			},
		};
	},
	// 页面触底触发
	onReachBottom(){
		if(this.showpage){
			this.paperStoreItem.pageNum +=1
			this.toast.loading()
			this.getfromdata()
		}
	},
	// #ifdef H5
	// #endif
	methods: {
		//计算设置表格高度
		setTableHeight(needOtherHeight=false){
				  if(!needOtherHeight){
					  this.otherHeight = 0
				  }
				try {
				    const res = uni.getSystemInfoSync();
					this.leftContentHeight =res.windowHeight -this.CustomBar - this.otherHeight -10
					return this.leftContentHeight
				} catch (e) {
				}
		},
		//获取指定内容占用高度,计算剩余高度 单位:PX
		getOtherContentHeight(className='bodyContentHeight'){
		  return new Promise((resolve, reject) => {
			   let eleHeight=0
			   let _self =this
			   let info = uni.createSelectorQuery().in(_self).select("."+className);
			  info.boundingClientRect(function(data) { //data - 各种参数
			 　　   _self.otherHeight = data.height
					eleHeight = data.height
					resolve(data.height)
			   }).exec(function (res) {
			   })
		  })
		},
		async getTableHeight(){
		  let _self=this
		  let tempHeight =  _self.setTableHeight()
		  let otherHeight= await _self.getOtherContentHeight("titlefrom") 
		},
		// 搜索条件判断
		checkValueData(){
			if(this.paperStoreItem.Type != '' || this.paperStoreItem.Coil != ''||
				this.paperStoreItem.Width != ''|| this.paperStoreItem.Gram != '' || 
				this.paperStoreItem.Vend != ''){
					return false
			}else{
				this.toast.message('至少选择一个条件')
				return true
			}
		},
		// 搜索
		paprtIn(){
			if(this.checkValueData()) return
			this.showpage = true
			this.fromdata = [];
			this.numbertext = 0;
			this.paperStoreItem.pageNum = 1
			this.toast.loading();
			this.getfromdata()
		},	
		getfromdata(){
			request.post('/warehouse/warehouse/execute/appSpSPaperStoreQueryForPDA',this.paperStoreItem)
			.then(res=>{
				if(res.list.length >0 ){
					if(res.list.length < this.paperStoreItem.pageSize) this.showpage = false
					this.fromdata =[...res.list,...this.fromdata]
					// console.log(this.fromdata[0].xxx??20);
					this.numbertext = this.fromdata.length	
					this.toast.hide();
				}else{
					this.toast.hide();
					this.toast.message('暂无数据')
				}
			}).catch(err=>{
				this.toast.hide();
				this.toast.message('数据加载失败')
			})
		},
		// 清除
		resetFrom(){
			this.fromdata = [];
			this.paperStoreItem.Vend = '';
			this.$refs.customerDrawer.$data.formItem.customers = '';
			this.$refs.customerDrawer.$data.formItem.customersId = '';
			this.$refs.findPaperLimit.$data.formItem.customers = '';
			this.$refs.findPaperLimit.$data.formItem.customersId = '';
			this.$refs.customertype.$data.formItem.customers = '';
			this.$refs.customertype.$data.formItem.customersId = '';
			this.paperStoreItem.Vend = '';
			this.paperStoreItem.Width = '';
			this.paperStoreItem.Type = '';
			this.paperStoreItem.Gram = '';
			this.paperStoreItem.Coil = '';
			this.numbertext = 0;
		},
		//工单号失去焦点
		// findGoods(){
		// 	this.paprtIn()
		// 	// this.toast.loading()
		// 	// request.post('/warehouse/warehouse/execute/appSpSPaperStoreQueryForPDA',this.paperStoreItem)
		// 	// .then(res=>{
		// 	// 	if(res.list && res.list.length > 0){
		// 	// 		this.toast.hide();
		// 	// 		this.fromdata = res.list
		// 	// 		this.numbertext = res.list.length
		// 	// 	}else{
		// 	// 		this.toast.hide();
		// 	// 		this.paperStoreItem.Coil = ''
		// 	// 		this.toast.message('没有该订单对应的数据');
		// 	// 	}
		// 	// }).catch(err=>{
		// 	// 	this.toast.hide();
		// 	// 	this.errorContent = '暂无数据';
		// 	// 	this.toast.message('获取数据失败:' + err);
		// 	// })
		// },
		//===打开扫描===
		async turnOnScanCode(type) {
			if(this.checkScan()){
				this.toast.message('请在"e包装"公众号中下载APP后扫码!')
				return
			}
			let scandata = await this.ScanModule(); 
			if(scandata.resp_code==1000){
				let a = scandata.resp_result.indexOf(',')
				let b = 0
				if(a<0){
					b = scandata.resp_result
				}else{
					b = scandata.resp_result.substring(0,a)
				}
				this.paperStoreItem.Coil = b
				this.paprtIn();
			}else{
				this.toast.message('扫码失败请重试')
			}
		},
	}
};
</script>

<style scoped>
.xunhoutop{
	position: fixed;
	width: 100%;
	z-index: 10;
}
.chucangbtm{
	position: fixed;
	bottom: 0px;
	width: 100%;
	background-color: #FFFFFF;
}
.margin-text-center {
	text-align: center;
	margin: 20rpx;
}
.border-top {
	border-top: 1px solid #eee;
}
.cu-form-group .title {
	min-width: calc(4em + 15px);
}
</style>
