<template>
	<view>
		<cu-custom class="titlefrom" bgColor="bg-gradual-blue" :isBack="true"><block slot="content">原纸缺纸</block></cu-custom>
		<v-table
			:columns="findGoodsColumns" 
			:list="paperOutTableDataItems" 
			selection="single"
			:td-width="125"
			:row-class-name="rowClassNameFn"
			>
		</v-table>
	</view>
</template>

<script>
import vTable from "@/components/table.vue"
import cuCustom from '@/ui/colorui/components/cu-custom.vue';
import request from '@/utils/request.js';
	export default {
	name: 'baseshortpaper', //原纸缺纸
	components: { cuCustom,vTable},
		data() {
			return {
				paperOutTableDataItems:[],//数据源
				findGoodsColumns: [
					{
						key: 'row',
						title: '序号',
						$width: 80,
						titleAlign: 'center', 
						columnAlign: 'center' 
						// $fixed:'left'
					},
					{
						key: 'sp_Type',
						title: '原纸类型',
						$width: 140,
						titleAlign: 'center',
						columnAlign: 'center' 
					},
					{
						key: 'st_Desc',
						title: '类型名称',
						$width: 140,
						titleAlign: 'center',
						columnAlign: 'center' 
					},
					{
						key: 'sp_Width',
						title: '纸宽',
						$width: 90,
						titleAlign: 'center',
						columnAlign: 'right' 
					},
					{
						key: 'StoreQty',
						title: '库存数',
						$width: 120,
						titleAlign: 'center',
						columnAlign: 'right' 
					},
					{
						key: 'pss_Min',
						title: '最低安全库存',
						$width: 190,
						titleAlign: 'center',
						columnAlign: 'right' 
					},
					{
						key: 'missQty',
						title: '缺纸数',
						$width: 120,
						titleAlign: 'center',
						columnAlign: 'right' 
					},
				]
			}
		},
		
		mounted () {
		},
		 onShow(){
			 this.getpaperOutTableDataItems()
		 },
		
		methods: {
			getpaperOutTableDataItems(){
				let user = this.cache.get(this.appConst.CLIENT_USER_CACHE_NAME)
				let parmas = {UserID:user.erpUserCode} 
				this.toast.loading();
				request.post('/warehouse/warehouse/execute/appSpSPaperStoreMissingPaper',parmas).then(res=>{
					if(res.list.length != 0){
						this.toast.hide();
						this.paperOutTableDataItems = res.list
					}else{
						this.toast.message('暂无数据')
					}
				}).catch(err=>{
					this.toast.hide();
					this.toast.message('数据加载失败')
				})
			},
			// 自定义某行样式
			rowClassNameFn(row, index) {
				if (Number(index) % 2 == 0) {
					return 'table-single-row';
				} 
				return '';//'table-double-row';
			},
			onClick(){
				
			}
		}
	}
</script>

<style scoped>
</style>
