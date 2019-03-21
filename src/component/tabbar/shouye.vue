<template>
	<div>
		<swiper :id="id" :bb="obj"></swiper>
		<ul class="sixicon">
			<li>
				<router-link to="/shouye/news">
					<img src="../../img/six-icon/menu1.png" alt="">
					<h4>新闻资讯</h4>
				</router-link>	
			</li>
			<li>
				<router-link to="/shouye/picture">
					<img src="../../img/six-icon/menu2.png" alt="">
					<h4>图片分享</h4>
				</router-link>
			</li>
			<li>
				<router-link to="/shouye/goods">
					<img src="../../img/six-icon/menu3.png" alt="">
					<h4>商品购买</h4>
				</router-link>
			</li>
			<li>
				<router-link to="/shouye/message">
					<img src="../../img/six-icon/menu4.png" alt="">
					<h4>留言反馈</h4>
				</router-link>
			</li>
			<li>
				<router-link to="/shouye/video">
					<img src="../../img/six-icon/menu5.png" alt="">
					<h4>视频专区</h4>
				</router-link>
			</li>
			<li>
				<router-link to="/shouye/contact">
					<img src="../../img/six-icon/menu6.png" alt="">
					<h4>联系我们</h4>
				</router-link>
				
			</li>
		</ul>
	</div>
</template>
<style lang="scss" scoped>
	.sixicon{
		list-style:none;
		display:flex;
		flex-wrap:wrap;
		padding:0;
		background:#fff;
		margin: 30px 0 30px 0;
		li{
			width:33%;
			text-align:center;
			margin-bottom:40px;
			img{
				width:60px;
				height:60px;
			}
			h4{
				color: black;
			}
		}
	}
</style>
<script>
import {Toast} from "mint-ui"
import swiper from "@/component/comments/swiper.vue"
export default{
	data(){
		return {
			id:1,
			obj: true
		}
	},
	methods:{

	},
	components: {
		swiper
	}
}
</script>

