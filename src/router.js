/*
* @Author: lenovo
* @Date:   2019-03-08 00:35:23
* @Last Modified by:   lenovo
* @Last Modified time: 2019-03-18 19:28:35
*/
import VueRouter from "vue-router"
import shouye from "@/component/tabbar/shouye.vue"
import huiyuan from "@/component/tabbar/huiyuan.vue"
import gowuche from "@/component/tabbar/gouwuche.vue"
import sousu from "@/component/tabbar/sousu.vue"

import news from "@/component/iconluyou/news.vue"
import goods from "@/component/iconluyou/goods.vue"
import message from "@/component/iconluyou/message.vue"
import contact from "@/component/iconluyou/contact.vue"
import picture from "@/component/iconluyou/picture.vue"
import video from "@/component/iconluyou/video.vue"

import newsinfo from "@/component/newsinfo/newsinfo.vue"
import picinfo from "@/component/pictureinfo/pictureinfo.vue"
import goodinfo from "@/component/goodsinfo/goodsinfo.vue"
import goodpic from "@/component/goodsinfo/goodpic.vue"
const rout = new VueRouter({
	routes: [
		{path:"/",redirect:"/shouye"},
		{path:"/shouye",component:shouye},
		{path:"/huiyuan",component:huiyuan},
		{path:"/gowuche",component:gowuche},
		{path:"/sousuo",component:sousu},

		{path:"/shouye/news",component:news},
		{path:"/shouye/goods",component:goods},
		{path:"/shouye/message",component:message},
		{path:"/shouye/picture",component:picture},
		{path:"/shouye/video",component:video},
		{path:"/shouye/contact",component:contact},

		{path:"/shouye/newsinfo/:id",component:newsinfo},
		{path:"/shouye/picture/picinfo/:id",component:picinfo},
		{path:"/shouye/goods/goodinfo/:id",component:goodinfo},
		{path:"/shouye/goods/goodinfo/goodpic/:id",component:goodpic,name:"goodpicture"}
	],
	scrollBehavior (to, from, savedPosition) {
	  	if (savedPosition) {
	   		return savedPosition
	  	} else {
	    	return { x: 0, y: 0 }
	  }
	},
	linkActiveClass: 'mui-active'
})

export default rout