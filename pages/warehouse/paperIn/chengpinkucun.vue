<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="content">纸板成品库存</block>
				<!-- <block slot="right">
					<view class="rightBtnBox">
						<view @click="approval()" class="cu-btn bg-green shadow" style="margin-right: 10px;">
							同意
						</view>
						<view @click="reject()" class="cu-btn bg-red shadow" >
							驳回
						</view>
					</view>
				</block> -->
		</cu-custom>
		<view class="flex border-top">
			<view  class="userclass">
					<selectDropdown
						:otherHeight='CustomBarHeight' 
						ref="customerDrawer"
						url="appGetCustomerList"
						title="客ㅤ户"
						placeholdertext="请选择客户"
						v-model='FormItems.CustID'
						:params='{
							modelCode:"paper_product_store",//模块标识
							UserCode:this.userInfo.erpUserCode,//--用户编号
							pageSize:50,
							pageNum:1,
						}'
					></selectDropdown>
			</view>
			<view  class="dataClass">
				<view class="cu-form-group paddingRigntnone">
					<view class="title paddingnone">单号:</view>
					<input v-model="FormItems.CoNo" class="borderbottom"/>
				</view>
			</view>
			<view class="flex-sub">
				<view class="cu-form-group">
					<button :disabled="isLoaddingData" class="cu-btn lines-orange shadow"  @click="changeMode(0)">明细</button>
					<button :disabled="isLoaddingData" class="cu-btn lines-brown shadow"  @click="changeMode(1)">客户</button>
					<button :disabled="isLoaddingData" class="cu-btn lines-green shadow"  @click="changeMode(2)">地区</button>
					<button :disabled="isLoaddingData" class="cu-btn lines-blue shadow"  @click="queryData">搜索</button>
					<button :disabled="!showPage" class="cu-btn lines-green shadow"  @click="getMoreData">加载更多</button>
				</view>
			</view>
		</view>
		<view class="vtable">
			<v-table
				:row-class-name="rowClassNameFn"
				:columns="subdataColumns" 
				:list="subdataTableList" 
				selection="single"
				:td-width="125"	
				:height="tableHeight-43"
				>
			</v-table>
		</view>
	</view>
</template>

<script>
import selectDropdown from '@/components/selectDropdown/selectDropdown.vue';
import dayjs from 'dayjs';
import cuCustom from '../../../ui/colorui/components/cu-custom.vue';
import warehouse from '@/mixins';
import request from '@/utils/request.js';
import vTable from "@/components/table.vue";
const detailedColumn = [
	{ key: 'rownumber', title: '序号',$width: 75,columnAlign: 'center'},
	{ key: 'CustName', title: '客户名称', $width: 150, titleAlign: 'left', columnAlign: 'left'},
	{ key: 'CoNo', title: '订单号', $width: 180, titleAlign: 'left', columnAlign: 'left'},
	{ key: 'DueDate', title: '交期', $width: 90, titleAlign: 'left', columnAlign: 'left'},
	{ key: 'Art', title: '纸质', $width: 120, titleAlign: 'left', columnAlign: 'left'},
	{ key: 'ArtLB', title: '楞别', $width: 85, titleAlign: 'left', columnAlign: 'left'},
	{ key: 'Spec', title: '规格', $width: 140, titleAlign: 'right', columnAlign: 'right'},
	{ key: 'CoQty', title: '订单数', $width: 110, titleAlign: 'right', columnAlign: 'right'},
	{ key: 'StoreQty', title: '库存数', $width: 95, titleAlign: 'right', columnAlign: 'right'},
	{ key: 'NoDelQty', title: '未送数', $width: 120, titleAlign: 'right', columnAlign: 'right'},
	{ key: 'Cube', title: '体积', $width: 140, titleAlign: 'right', columnAlign: 'right'},
	{ key: 'Area', title: '面积', $width: 140, titleAlign: 'right', columnAlign: 'right'},
	{ key: 'InDate', title: '入库日期', $width: 170, titleAlign: 'left', columnAlign: 'right'},
];
const gatherColumn = [
	{ key: 'rownumber', title: '序号',$width: 75,columnAlign: 'center'},
	{ key: 'CustID', title: '客户编号', $width: 290, titleAlign: 'center', columnAlign: 'center'},
	{ key: 'CustName', title: '客户名称', $width: 290, titleAlign: 'center', columnAlign: 'center'},
	{ key: 'CoQty', title: '订单数', $width: 160, titleAlign: 'right', columnAlign: 'right'},
	{ key: 'StoreQty', title: '库存数', $width: 160, titleAlign: 'right', columnAlign: 'right'},
	{ key: 'NoDelQty', title: '未送数', $width: 160, titleAlign: 'right', columnAlign: 'right'},
	{ key: 'Cube', title: '体积', $width: 160, titleAlign: 'right', columnAlign: 'right'},
	{ key: 'Area', title: '面积', $width: 160, titleAlign: 'right', columnAlign: 'right'},
	{ key: 'Weight', title: '重量', $width: 160, titleAlign: 'right', columnAlign: 'right'},
];
const zoneColumn = [
	{ key: 'rownumber', title: '序号',$width: 75,columnAlign: 'center'},
	{ key: 'ZoneID', title: '地区编号', $width: 180, titleAlign: 'center', columnAlign: 'center'},
	{ key: 'ZoneName', title: '地区名称', $width: 180, titleAlign: 'center', columnAlign: 'center'},
	{ key: 'CoQty', title: '订单数', $width: 160, titleAlign: 'right', columnAlign: 'right'},
	{ key: 'StoreQty', title: '库存数', $width: 160, titleAlign: 'right', columnAlign: 'right'},
	{ key: 'DelQty', title: '送货数', $width: 160, titleAlign: 'right', columnAlign: 'right'},
	{ key: 'NoDelQty', title: '未送数', $width: 180, titleAlign: 'right', columnAlign: 'right'},
	{ key: 'Cube', title: '体积', $width: 160, titleAlign: 'right', columnAlign: 'right'},
	{ key: 'Area', title: '面积', $width: 180, titleAlign: 'right', columnAlign: 'right'},
	{ key: 'Weight', title: '重量', $width: 180, titleAlign: 'right', columnAlign: 'right'},
]
const default_totalList = {CustName:'合计',CoQty:0,StoreQty:0,NoDelQty:0,Cube:0,Area:0,bMoney:0}//Table合计数据
	export default {
		components:{cuCustom,vTable,selectDropdown},
		mixins:[warehouse],
		data() {
			return {
				flag0: true,
				flag1: true,
				flag2: true,
				FormItems:{
					CustID:'',//客户
					CoNo:'',//单号
					Mode:0,// -- 0明细、1客户汇总
					pageSize:100,
					pageNum:1
				},
				showPage:false,//是否继续分页查询
				tableindex:0,//tavle点击索引
				tableclickitem:0,//table点击行
				tableHeight:300,//table高度
				subdataTableList:[],//表显示数据
				subdataColumns:Object.assign(detailedColumn),
				totalList:JSON.parse(JSON.stringify(default_totalList))
			}
		},
		// #ifdef H5
		mounted() {
		},
		// #endif
		// #ifndef H5
		onLoad(data) {

		},
		onShow() {
			plus.navigator.setFullscreen(false);
			setTimeout(()=>{
				plus.screen.lockOrientation("landscape-secondary")
				this.calTableHeight()
			},1300)
		},
		// 监听页面返回时改成正常显示
		onBackPress(){
			plus.screen.unlockOrientation();
			setTimeout(()=>{
				plus.screen.lockOrientation("portrait-primary")
			},1300)
		},
		// #endif
		methods: {		
			//加载更多
			getMoreData(){
				this.FormItems.pageNum++
				this.getTableList()
			},
			// Mode变化回调
			changeMode(data){
				if(data == 0){
					this.subdataColumns = Object.assign(detailedColumn)
				}else if(data == 1){
					this.subdataColumns = Object.assign(gatherColumn)
				}else{
					this.subdataColumns = Object.assign(zoneColumn)
				}
				this.subdataTableList = []
				this.totalList = JSON.parse(JSON.stringify(default_totalList))
				this.FormItems.Mode = data
				this.FormItems.pageNum = 1
				this.getTableList()
			},
			// 查询按钮回调
			queryData(){
				this.totalList = JSON.parse(JSON.stringify(default_totalList))
				this.subdataTableList = []
				this.FormItems.pageNum = 1
				this.getTableList()
			},
			// 沙井飞耀自定义数据处理
			sjfyData(Data){
				if(Data.list[0].bMoney !== undefined && this.FormItems.Mode === 0){
					if (this.flag0){
					detailedColumn.splice(9,0,{ key: 'bMoney', title: '本币金额', $width: 140, titleAlign: 'right', columnAlign: 'right'})
					this.flag0 = false
					}
				}
				if(Data.list[0].bMoney !== undefined && this.FormItems.Mode === 1){
					if (this.flag1){
					gatherColumn.splice(5,0,{ key: 'bMoney', title: '本币金额', $width: 140, titleAlign: 'right', columnAlign: 'right'})
					this.flag1 = false
					}
				}
				if(Data.list[0].bMoney !== undefined && this.FormItems.Mode === 2){
					if (this.flag2){
					zoneColumn.splice(5,0,{ key: 'bMoney', title: '本币金额', $width: 140, titleAlign: 'right', columnAlign: 'right'})
					this.flag2 = false
					}
				}
				console.log(Data.list[0].bMoneyqad);
			},
			// 格式化指定字段
			formatDataListBy(dataList){
					dataList.map((item,index)=>{
						if(!!item.bMoney){
							console.log(item);
							this.subdataTableList[index].bMoney =this.addThousandthSign(item.bMoney.toFixed(2))
						}
					})
			},
			// 查询表单数据
			getTableList(){
				this.subdataTableList.splice(this.subdataTableList.length-1,1)
				this.toast.loading()
				let _self = this
				 this.FormItems.UserID = this.userInfo.erpUserCode,
				 request.post('/warehouse/warehouse/execute/appSpPaperProductStore',this.FormItems).then(res=>{
					 _self.subdataTableList = _self.subdataTableList.concat(_self.transformData(res.list))
					 _self.sjfyData(res)
					 this.formatDataListBy(_self.subdataTableList)
					 setTimeout(function() {
						 _self.toast.hide()
					 }, 1500);
				 }).catch(err=>{
					 this.toast.message(err)
				 })
			},
			// Table显示数据处理
			transformData(data){
				if(data.length < this.FormItems.pageSize){
					this.showPage = false
				}else{this.showPage = true}
				let _self = this
				data.filter(item=>{
					_self.totalList.CoQty+=item.CoQty
					_self.totalList.StoreQty+=item.StoreQty
					_self.totalList.NoDelQty+=item.NoDelQty
					_self.totalList.Cube+=item.Cube
					_self.totalList.Area+=item.Area
					// 沙井飞耀个性化数据合计
					if(data[0].bMoney !== undefined){
						console.log(1);
						_self.totalList.bMoney+=item.bMoney
					}
				})
				this.totalList.Cube=Number(this.totalList.Cube.toFixed(2))
				this.totalList.Area=Number(this.totalList.Area.toFixed(2))
				return (data.push(this.totalList),data)
			},
			// 设置表格使用剩余高度
			calTableHeight(){
				this.$nextTick(()=>{
					setTimeout(()=>{
						//延时执行,方便个别小程序兼容
						let tempHeight =  this.setTableHeight(true)
						this.tableHeight =tempHeight//特别处理
					},200)
				})
			}
		}
	}
</script>

<style>
.paddingnone{
	padding: 0px;
}
.paddingRigntnone{
	padding-right: 0px;
}
.dataClass{
	height: 76%;
	width: 20%;
}
.userclass{
	height: 76%;
	width: 30%;
	padding: 0px;
}
.borderbottom{
		border-bottom:1px solid #464E52 ;
}
</style>
