<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="content">纸板出仓扫描</block></cu-custom>
			<form class="xunhoutop">
				<view ref="elForm" class="bodyContentHeight2 elForm">
					<view class="cu-form-group">
						<view class="title">订单号:</view>
						<input @blur="paperOut()" v-model="paperOutItem.fOrderNo" placeholder="请输入订单号" />
						<button @click="turnOnScanCode('out')" type="primary" size="mini">扫描</button>
					</view>
			</view>
			</form>
			<view style="height: 40px;"></view>
			<view class="example">
					<v-table 
						:row-class-name="rowClassNameFn"
						:columns="findGoodsColumns" 
						:list="paperOutTableDataItems" 
						selection="single"
						:td-width="150"
						@on-selection-change='onClick'
						>
					</v-table>
			</view>
			<view style="height: 50px;"></view>
			<view class="chucangbtm">
				<view class="flex solid-bottom padding justify-around elBtn" ref="elBtn">
					<button @click="resetFrom"  type="primary" size="mini" class="bg-grey radius">清除</button>
					<button @click="deletelist" data-target="DialogModal1" type="primary" size="mini" class="bg-grey radius">删除</button>
					<button @click="updetelist" data-target="DialogModal1"  type="primary" size="mini" class="bg-grey radius">修改</button>
					<button @click="paprtIn"  type="primary" size="mini" class="bg-grey radius">保存</button>
				</view>
			</view>	
			
			<!-- 修改窗口 -->
			<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
				<view class="cu-dialog">
					<view class="cu-bar bg-white justify-end">
						<view class="content">{{edittitle}}</view>
						<view class="action" @tap="hideModal">
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="grid-body">
						<view class="grid-flex padding-10">
							<view style="color: red;">
								<text>工单号:{{findGoodsTableDataItems.OrderNo}}</text>
							</view>
							
						</view>
						<view class="grid-flex padding-10">
								<view>
									<text>工单信息:{{findGoodsTableDataItems.w_Name}},{{findGoodsTableDataItems.PaperInfo}}</text>
								</view>
						</view>
						<view class="grid-flex padding-10">
							<view>
								<text>库存:{{findGoodsTableDataItems.Store}} </text>
							</view>
							<view>
								<text>未送数:{{findGoodsTableDataItems.NoDueQty}}</text>
							</view>
							<view>
								<text>装车数:{{findGoodsTableDataItems.CLQty}}</text>
							</view>
						</view>
					</view>
					<view class="updete" style="font-size: 20px;" v-if=" edittitle == '修改' ">
							<view class="title">装车数:</view>
							<input type="number" style=" border: 1px solid red; width: 30%;" v-model="CLQty"/>
					</view>
					<view class="cu-bar bg-white justify-end">
						<view class="action">
							<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
							<button class="cu-btn bg-green margin-left" @tap="hideModal('ok')">确定</button>
						</view>
					</view>
				</view>
			</view>
	</view>
</template>


<script>
import tTable from '@/components/t-table/t-table.vue';
import tTh from '@/components/t-table/t-th.vue';
import tTr from '@/components/t-table/t-tr.vue';
import tTd from '@/components/t-table/t-td.vue';
import zTable from '@/components/z-table/z-table.vue';
import cuCustom from '@/ui/colorui/components/cu-custom.vue';
import request from '@/utils/request.js';
import warehouse from '@/mixins';
import vTable from "@/components/table.vue"
export default {
	name: 'paperIn',
	components: {vTable, zTable, cuCustom,tTable,tTh, tTr,tTd},
	mixins: [warehouse],
	data() {
		return {
			CLQty:'',//修改装车数
			edittitle:'',
			otherHeight:0,
			leftContentHeight:0,
			index:null,//存储选中行
			modalName:'',//弹框显示
			TabCur: 0,
			scrollLeft: 0,
			dataTableList: [],
			errorContent: '暂无数据', //数据加载中...
			tableHeight: 0, //表格高度
			findGoodsTableDataItems: [],//存储需要操作的数据
			paperOutTableDataItems: [],
			paperInFormItems: {
				instruct: '', //指令
				station: '', //仓位
				fOrderNo: '', //工单号
				line: '', //线别
				group: '', //班别
				fQty: '', //数量
				fDNum: '', //板号,
				desc: '' //备注
			},
			paperInFormInit: {
				instruct: '', //指令
				station: '', //仓位
				fOrderNo: '', //工单号
				line: '', //线别
				group: '', //班别
				fQty: '', //数量
				fDNum: '', //板号,
				desc: '' //备注
			},
			findGoodsItem: {
				fOrderNo: '' //工单号
			},
			paperOutItem: {
				fOrderNo: '', //工单号
				batch: ''
			},
			findGoodsColumns: [
				{
					key: 'Serial',
					title: '序号',
					$width: 80,
					// $fixed:'left'
				},
				{
					key: 'CustName',
					title: '客户',
					$width: 180,
					titleAlign: 'center',
					columnAlign: 'center'
				},
				{
					key: 'OrderNo',
					title: '订单号',
					$width: 200
				},
				{
					key: 'Store',
					title: '库存数',
					$width: 120,
					titleAlign: 'center',
					columnAlign: 'right'
				},
				{
					key: 'NoDueQty',
					title: '未送数',
					$width: 120,
					titleAlign: 'center',
					columnAlign: 'right'
				},
				{
					key: 'CLQty',
					title: '装车数',
					$width: 120,
					titleAlign: 'center',
					columnAlign: 'right'
				},
				{
					key: 'PaperInfo',
					title: '纸板信息',
					$width: 220,
					titleAlign: 'center',
					columnAlign: 'center'
				},
				{
					key: 'MinSize',
					title: '小尺寸',
					$width: 200,
					titleAlign: 'center',
					columnAlign: 'center'
				},
				{
					key: 'AreaName',
					title: '地区',
					$width: 130,
					titleAlign: 'center',
					columnAlign: 'center'
				},
			]
		};
	},
	// #ifdef H5
	mounted () {
		this.getTableHeight();
		this.getTemporaryData();
	},
	 onShow(){
		 this.getTemporaryData();
	 },
	// #endif
	// #ifndef H5
	onReady () {
		this.getTableHeight();
		this.getTemporaryData();
	},
	// #endif
	methods: {
		// 自定义某行样式
		rowClassNameFn(row, index) {
			if (Number(index) % 2 == 0) {
				return 'table-single-row';
			} 
			return '';//'table-double-row';
		},
		getTemporaryData(){
			let user = this.cache.get(this.appConst.CLIENT_USER_CACHE_NAME)
			let data = {
				UserID: user.erpUserCode,
				Flag: 2
			}
			request.post('/warehouse/warehouse/execute/appPaperCarListAppTemp',data)
			.then(res=>{
				this.paperOutTableDataItems = res.list
				for(let i = 0 ; i<this.paperOutTableDataItems.length; i++){
					this.paperOutTableDataItems[i].Serial = i+1
				}
			})
		},
		//获取指定内容占用高度,计算剩余高度 单位:PX
		getOtherContentHeight(className='bodyContentHeight'){
		  return new Promise((resolve, reject) => {
			   let eleHeight=0
			   let _self =this
			   let info = uni.createSelectorQuery().in(_self).select("."+className);
			  info.boundingClientRect(function(data) { //data - 各种参数
				 // console.log('other Height:'+data.height)  // 获取元素宽度
			 　　   _self.otherHeight = data.height
					eleHeight = data.height
					resolve(data.height)
			   }).exec(function (res) {
			   })
		  })
		},
		//计算设置表格高度
		setTableHeight(needOtherHeight=false){
				  if(!needOtherHeight){
					  this.otherHeight = 0
				  }
				try {
					//debugger
				    const res = uni.getSystemInfoSync();
				    // console.log('windowHeight:'+res.windowHeight);
				     // console.log('CustomBar:'+this.CustomBar);
				    // console.log('bodyContentHeight:'+this.otherHeight);
					this.leftContentHeight =res.windowHeight -this.CustomBar - this.otherHeight -10
					//console.log('tableHeight:'+this.leftContentHeight);
					return this.leftContentHeight
					// console.log(this.leftContentHeight)
				} catch (e) {
				    // error
				}
		},
		// 动态获取设置滚动条高度,适配整屏
		async getTableHeight(){
		  let _self=this
		  let tempHeight =  _self.setTableHeight()
		  let otherHeight= await _self.getOtherContentHeight("elForm")
		  let otherHeight2 = await _self.getOtherContentHeight("elBtn")
		  if(otherHeight!=null && otherHeight2!=null){
			_self.tableHeight =tempHeight-otherHeight-otherHeight2-20
			// console.log('111'+_self.tableHeight)
		  }
		},
		//操作数据调用接口
		operationFromrequst(param){
			return request.post(`/warehouse/warehouse/execute/appPaperCarListAppTemp`,param);
		},
		//清空按钮
		resetFrom(){
			let user = this.cache.get(this.appConst.CLIENT_USER_CACHE_NAME)
			if (this.paperOutTableDataItems.length == 0) {
				this.toast.message('请输入工单号');
				return;
			}
			this.paperOutTableDataItems = [];
			this.paperOutItem.fOrderNo = "";
			let data={
				UserID:user.erpUserCode,
				Flag: 5
			}
			this.operationFromrequst(data)
		},
		//修改按钮
		updetelist(e){
			// debugger
			if (this.paperOutTableDataItems.length == 0) {
				this.toast.message('请输入工单号');
				return;
			}
			if(this.index == null){
				this.toast.message('请选择操作数据');
				return;
			}
			// if(this.findGoodsTableDataItems.CLQty == 0){
			// 	this.findGoodsTableDataItems.CLQty = ''
			// }
			this.edittitle = '修改'
			this.modalName = e.currentTarget.dataset.target
		},
		hideModal(e) {
			// debugger 
			let user = this.cache.get(this.appConst.CLIENT_USER_CACHE_NAME)
			let index = this.index
			let data = {
				Flag:3,
				UserID:user.erpUserCode,
				CLQty:Number(this.CLQty),
				OrderNo:this.paperOutTableDataItems[index].OrderNo
			}
			if(e=='ok'){
				if(this.edittitle == '修改'){
					let dataInfo = this.paperOutTableDataItems[index]
					if(dataInfo.Store < +this.CLQty){
						this.toast.message('装车数不能大于库存数!');
						return
					}
					if(dataInfo.NoDueQty < +this.CLQty){
						this.toast.message('装车数不能大于未送数!');
						return
					}
					this.paperOutTableDataItems[index].CLQty =
					JSON.parse(JSON.stringify(this.CLQty))	
					// debugger
					this.operationFromrequst(data)
					this.modalName = null
					this.CLQty = ''
					this.onClick()
				}else{
					let data = {
						Flag:4,
						OrderNo:this.paperOutTableDataItems[index].OrderNo,
						UserID:user.erpUserCode,
						CLQty:''
					}
					this.operationFromrequst(data)
					this.paperOutTableDataItems.splice(index,1)
					for(let i = 0 ; i<this.paperOutTableDataItems.length; i++){
						this.paperOutTableDataItems[i].Serial = i+1
					}
					this.modalName = null
				}
				
			}else{
				this.modalName = null
			}
			// this.findGoodsTableDataItems.CLQty = 
			// this.paperOutTableDataItems[index].CLQty
		},
		//删除按钮
		deletelist(e){
			let user = this.cache.get(this.appConst.CLIENT_USER_CACHE_NAME)
			if (this.paperOutTableDataItems.length == 0) {
				this.toast.message('请输入工单号');
				return;
			}
			if (this.index == null) {
				this.toast.message('请选择操作数据');
				return;
			}
			let index = this.index
			this.edittitle = '删除'
			this.modalName = e.currentTarget.dataset.target
			
			// uni.showModal({
			//     title: '提示',
			//     content: '是否要删除该条数据',
			//     success: (res)=> {
			// 		if (res.confirm) { 

			// 		}
			//     }
			// });
		},
		//table点击事件
		onClick(row){
			if(row == undefined){
				this.findGoodsTableDataItems = this.paperOutTableDataItems[this.index]
				return
			}
			this.findGoodsTableDataItems =JSON.parse(JSON.stringify(row.new.item)) 
			this.index = row.new.index
		},
		//打开扫描
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
					this.paperOutItem.fOrderNo = b;
					this.paperOut();
				}else{
					this.toast.message('扫码失败请重试')
				}
			},
		//查询数据
		paperInRequest(data) {
			return request.post('/warehouse/warehouse/execute/appSpScanOrder', data);
		},
		//效验装车数
		checkout(){
			let flag = false
			let data = 0
			this.paperOutTableDataItems.forEach((item,index)=>{
				data += item.CLQty
			})
			if(data <= 0){
				flag = true
				this.toast.message('总装车数不能为0!');
				return flag
			}
			return flag
		},
		//确认提交===入仓===
		paprtIn() {
			let _self = this
			if (this.paperOutTableDataItems.length == 0) {
				this.toast.message('请输入工单号');
				return;
			}
			if(this.checkout()) return
			let fOrderNo = this.paperOutItem.fOrderNo
			// uni.navigateTo({
			//     url: 'outStorageEdit?fOrderNo=${fOrderNo}'
			// });
		  uni.navigateTo({
				  url:'outStorageEdit?fOrderNo='+encodeURIComponent(fOrderNo),
				  success: function(e) {
					  // _self.resetFrom()
					  _self.paperOutTableDataItems = []
				  }
			})
			// success: (res)=> {
			// 	debugger
			// 	console.log('111'+res)
			// 	this.resetFrom()
			// }
			
			// complete:(res=>{
			// 	debugger
			// })
		},
		//====出仓====
		paperOut() {
			// debugger
			let user = this.cache.get(this.appConst.CLIENT_USER_CACHE_NAME) 				
			let outTableArray = null
			if (this.paperOutItem.fOrderNo == '') {
				this.toast.message('请输入或扫描订单号');
				this.paperOutItem.fOrderNo = ''
				return;
			}
			for(let i = 0; i<this.paperOutTableDataItems.length; i++){
				let fOrderNo = this.paperOutItem.fOrderNo
				if(fOrderNo == this.paperOutTableDataItems[i].OrderNo){
					this.toast.message('该订单号已扫描');
					this.paperOutItem.fOrderNo = ''
					return;
				}
			}
			let data = {
				BarCodeStr: this.paperOutItem.fOrderNo,
				Station:'',
				Flag: 2,
				UserID:user.erpUserCode
			};
			this.toast.loading();
			this.paperInRequest(data)
				.then(res => {
					this.toast.hide();
					if (res.list && res.list.length > 0) {
						// this.paperOutTableDataItems = res.list;
						// outTableArray.push(JSON.parse(JSON.stringify(res.list[0])))
						this.paperOutTableDataItems.push(JSON.parse(JSON.stringify(res.list[0])))
						// console.log(this.paperOutTableDataItems)
						this.paperOutItem.fOrderNo = ''
					}else{
						this.toast.message('该订单号暂无数据');
						this.paperOutItem.fOrderNo = ''
					}
					for(let i = 0 ; i<this.paperOutTableDataItems.length; i++){
						this.paperOutTableDataItems[i].Serial = i+1
					}
					// console.log(this.paperOutTableDataItems)
				})
				.catch(err => {
					this.toast.hide();
					this.toast.message('暂无数据');
					this.paperOutItem.fOrderNo = '';
				});
		}
	}
};
</script>

<style scoped>
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
.updete {
	/* width: 50%; */
	display: flex;
	margin: auto 20px 10px;
	justify-content:flex-end
	
}
.padding-xl {
	display: flex;
	justify-content:flex-start;
	flex-direction:column;
}
.chucangbtm{
	position: fixed;
	bottom: 0px;
	width: 100%;
	background-color: #FFFFFF;
	z-index: 100;
}
.xunhoutop{
	position: fixed;
	width: 100%;
	z-index: 500;
}
</style>

