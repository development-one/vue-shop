/*
* @Author: lenovo
* @Date:   2019-03-06 20:43:43
* @Last Modified by:   lenovo
* @Last Modified time: 2019-03-20 11:37:45
*/
import Vue from "vue"
import VueRouter from "vue-router"
import app from "@/app.vue"
import rout from "@/router.js"
import MintUI from "mint-ui"
import 'mint-ui/lib/style.css'
import VueResource from "vue-resource"
Vue.use(VueResource)
Vue.use(MintUI)
Vue.use(VueRouter)
import "@/js/mui/css/mui.min.css"
import "@/js/mui/css/icons-extra.css"

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import moment from "moment"

import store1 from "@/store.js"

Vue.filter("dataFormat",function(datastr,pattern="YYYY-MM-DD HH:mm:ss"){
	return moment(datastr).format(pattern)
})

var vm = new Vue({
	el: "#app",
	data: {},
	render: c=>c(app),
	router: rout,
	store: store1
})