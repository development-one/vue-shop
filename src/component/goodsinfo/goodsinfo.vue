<template>
	<div class="goodsinfo">
		<transition 
			@before-enter="ben"
			@enter="en"
			@after-enter="aen"
			@after-leave="al"
			>
			<div class="xiaoqiu" v-show="flag" ref="xq"></div>
		</transition>
		<!-- 商品轮播图区域 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swiper :id="id" :bb="obj" ></swiper>
				</div>
			</div>
		</div>
		<!-- 商品购买区域 -->
		<div class="mui-card">
			<div class="mui-card-header">{{list.title}}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="price">
						<span>市场价:<span style="text-decoration:line-through;font-size:16px;">￥{{list.oldprice}}</span></span>
						<span class="xiaoshou">销售价:<span style="color:red;font-size:20px;font-weight:bold;">￥{{list.newprice}}</span></span>
					</div>
					<p class="count">购买数量:<count style="margin-left:10px" ref="number" :max="max"></count></p>
					<p>
						<mt-button type="primary" size="small">立即购买</mt-button>
						<mt-button type="danger" size="small" @click=" clickFlag && addcar()" :disabled="dis">加入购物车</mt-button>
					</p>
				</div>
			</div>
		</div>
		<!-- 商品参数区 -->
		<div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品名称：{{list.name}}</p>
					<p>库存情况：{{list.num}}</p>
					<p>上架时间：{{list.time | dataFormat}}</p>
				</div>
			</div>
			<div class="mui-card-footer">
				<mt-button type="primary" size="large" plain
				@click="pinglun(id)">图文情况</mt-button>
				<mt-button class="pl" type="danger" size="large" plain >商品评论</mt-button>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
 .goodsinfo{
 	.xiaoqiu{
		width:20px;
		height:20px;
		border-radius: 50%;
		background: red;
		position: absolute;
		z-index: 11;
		top: 388px;
		left: 151px;
			}
	.mui-card{
		border: 0.5px solid #ccc;
		box-shadow: 0px 1px 2px #ccc;
		.lunbo{
			.mint-swipe-item{
				text-align: center;
				img{
				width: 280px;
			}
			}	
		}
	}
	.mui-card{
		.mui-card-header{
			font-weight: bold;
		}
		.mui-card-content-inner{
			.price{
				font-size: 16px;
				.xiaoshou{
					margin-left: 10px;
				}
			}
			.count{
				font-size: 16px;
				margin-top:10px;
				color: black;
			}
		}
	}
	.mui-card{
		.mui-card-footer{
			display: block;
			.pl{
				margin-top:10px;
			}
		}
	}
 }
	</style>
<script>
import mui from "@/js/mui/js/mui.min.js"
import count from "@/component/comments/count.vue"
import swiper from "@/component/comments/swiper.vue"
import {Toast} from "mint-ui"
export default{
	data(){
		return{
			id: this.$route.params.id,
			obj: false,
			list: {},
			flag: false,
			clickFlag: true,
			max: '',
			count: 1,
			dis: false
		}
	},
	created(){
		this.getlist()
	},
	methods:{
		getlist(){
			this.$http.get("../../../public/api/goods/goodinfo/"+this.id+".json").then(result=>{
				this.list = result.body.message[0]
				this.max = this.list.num
			},function(){
				Toast("数据获取失败")
			})
		},
		pinglun(id){
			this.$router.push({name:"goodpicture",params:{id}})
		},
		addcar(){
			this.flag = !this.flag
			/*var cc = mui('.mui-numbox').numbox().getValue()
			console.log(cc)*/
			this.count = this.$refs.number.getnum()
			const goodl = {
				id: this.id,
				count: this.count,
				price: this.list.newprice,
				select: true
			}
			this.$store.commit("addcar",goodl)
		},
		ben(el){
			this.clickde = true
			el.style.transform = 'translate(0,0)'
		},
		en(el,done){
			this.clickFlag = false
			const xiaoqiu = this.$refs.xq.getBoundingClientRect()
			const tubiao = document.getElementById("bage").getBoundingClientRect()
			const xDist = tubiao.left - xiaoqiu.left
			const yDist = tubiao.top - xiaoqiu.top
			el.offsetWidth
			el.style.transform = `translate(${xDist}px,${yDist}px)`
			el.style.transition = 'all 1s cubic-bezier(.17,-0.32,1,.06)'
			document.body.parentNode.style.overflow = "hidden"
			done();
		},
		aen(el){
			this.flag = !this.flag
		},
		al(){
			this.clickFlag = true
			document.body.parentNode.style.overflow = "auto"
		}
	},
	components: {swiper,count}
}
</script>