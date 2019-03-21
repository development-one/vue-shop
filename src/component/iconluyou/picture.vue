<template>
	<div class="picture">
			<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item', item.id==0 ? 'mui-active' : '']" href="#item1mobile" data-wid="tab-top-subpage-1.html" v-for="item in list" :key="item.id" @tap="getpiclist(item.id)">
							{{item.titile}}
						</a>
					</div>
				</div>
		</div>
		<ul>
			<router-link v-for="item in piclist" :key="item.id" :to="'/shouye/picture/picinfo/'+item.id" tag="li">
				<img v-lazy="item.url" alt="">
				<div class="info">
					<div class="titile">
						{{item.title}}
					</div>
					<div class="body">
						{{item.zhayao}}
					</div>
				</div>
			</router-link>
		</ul>
	</div>
</template>
<style lang="scss" scoped>
	*{
		touch-action: pan-y;
		list-style: none;
	}
	.picture{
		.mui-slider{
			position: fixed;
			background-color: rgba(255,255,255,0.6)
		}
		ul{
		padding: 0;
		padding-top:40px;
		margin-top: 0px;
		display: block;
		box-sizing:border-box;
		li{
			padding: 10px;
			text-align: center;
			background: #555;
			border: 0;
			position: relative;
			img[lazy=loading] {
			  width: 40px;
			  height: 300px;
			  margin: auto;
			  text-align: center;
			}
			img{
				width:100%;
				vertical-align: middle;
			}
			.info{
				width: 100%;
				background: rgba(0,0,0,0.6);
				color: white;
				text-align: left;
				padding:10px;
				box-sizing: border-box;
				max-height: 66px;
				overflow:hidden;
				position: absolute;
				bottom: 0;
				.titiel{
					font-size: 16px;
				}
				.body{
					font-size: 14px;
				}
			}
		}
	}
	}	
</style>
<script>
import {Toast} from "mint-ui"
import mui from "@/js/mui/js/mui.min.js"
export default{
	data(){
		return{
			list: [],
			piclist: []
		}
	},
	created(){
		this.getlist(),
		this.getpiclist(0)
	},
	mounted(){
		mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 //flick 	减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
	},
	methods:{
		getlist(){
			this.$http.get("../../../public/api/newsinfo/picture.json").then(result=>{
				if(result.body.status===0){
					this.list = result.body.message
				}else{
					Toast("数据获取失败")
				}
			})
		},
		getpiclist(cateid){
			this.$http.get("../../../public/api/picture/"+cateid+".json").then(result=>{
				if(result.body.status===0){
					this.piclist = result.body.message
				}else{
					Toast("数据获取失败")
				}
			})
			window.scrollTo(0,0)		
		}
	}
}
</script>
