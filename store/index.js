import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		paperOutTableDataItems:[],
		countworlktime:[],
		tempChartData:[],// 看板选择临时数据
		// 辅料扫码入库回显参数
		paperScanIn:{},
		// 辅料扫码出库回显参数
		paperScanOut:{},
		// 纸板扫码标签回显参数
		paperScanLabel:{},
		// 和荣-装车出仓回显参数
		loadingOut_hr:{},
		// zsbt-纸板扫码入库回显参数
		paperScanIn_zsbt:{}
	},
	mutations: {
	    updataItems(state,data) {
			  state.paperOutTableDataItems = data
		},
		updataworlktime(state,data){
			state.countworlktime = data
		},
		// 设置看板临时数据
		setTempChartData(state,data){
			state.tempChartData = data
		},
		// 设置辅料扫码入库数据
		setPaperScanIn(state,data){
			state.paperScanIn = data
		},
		// 设置辅料扫码出库数据
		paperScanOut(state,data){
			state.paperScanOut = data
		},
		// 设置纸板扫码标签数据
		setPaperScanLabel(state,data){
			state.paperScanLabel = data
		},
		// 设置和荣-装车出仓回显参数
		setLoadingOut_hr(state,data){
			state.loadingOut_hr = data
		},
		// 设置zsbt-纸板扫码入库回显参数
		setPaperScanIn_zsbt(state,data){
			state.paperScanIn_zsbt = data
		}
	},
	actions: {

	},
	modules: {
		
	},
	getters: {
	    showArray (state) {
	      return state.paperOutTableDataItems
	    },
		getcountworlktimeArray (state) {	
			return state.countworlktime
		},
		// 获取临时看板图表数据
		getTempChartData (state) {
			return state.tempChartData
		}
	  },
})
