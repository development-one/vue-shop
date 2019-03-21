<template>
	<div class="gouwuche">
		<div class="mui-card" v-for="(item,i) in list" :key="item.id">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<mt-switch v-model="$store.getters.getSelect[item.id]" @change="sw(item.id,$store.getters.getSelect[item.id])"></mt-switch>
					<img :src="item.img" alt="">
					<div class="info">
						<h3>{{item.title}}</h3>
						<p class="info2"><span>￥{{item.price}}</span>
							<num :val="$store.getters.getCar[item.id]" :goodid="item.id"></num>
						</p>
						<mt-button type="danger" size="small" @click="del(item.id,i)">删除</mt-button>
					</div>
				</div>
			</div>
		</div>
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="titile">
						<p>总计（含运费）</p>
						<p>已勾选商品<em>{{$store.getters.getPrice.count}}</em>件，总价<em>￥{{$store.getters.getPrice.price}}</em></p>
					</div>
					<mt-button type="danger" >去结算</mt-button>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.gouwuche{
	.mui-card{
		.mui-card-content-inner{
			padding: 6px;
			display: flex;
			box-sizing: border-box;
			img{
				width:80px;
				height:100px;
				margin: 0 6px 0 6px;
			}
			.info{
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				h3{
					font-size: 16px;
				}
				.info2{
					display: flex;
					align-items: center;
					span{
						font-size: 18px;
						color: red;
					}
					.mui-numbox{
						height: 30px;
						margin-left: 10px;
					}
				}
				button{
					width: 100px;
				}
			}
		}
	}
	.mui-card{
		.mui-card-content-inner{
			display: flex;
			justify-content: space-around;
			align-items: center;
			.titile{
				p{
					color: black;
					font-size: 16px;
					em{
						font-style: normal;
						color: red;
						margin: 0 2px 0 2px;
					}
				}
			}
		}
	}
}
</style>
<script>
import num from "@/component/comments/count2.vue"
export default{
	data(){
		return{
			id: "",
			list: []
		}
	},
	created(){
		this.getlist()
	},
	methods:{
		getlist(){
			var idArr = []
			this.$store.state.car.forEach(item=>{
				idArr.push(item.id)
			})
			if(idArr.length <= 0){
				return;
			}
			this.$http.get("../../../public/api/goods/gowuche/"+idArr.join(",")+".json").then(result=>{
				this.list = result.body.message
			})
		},
		del(str,i){
			this.list.splice(i,1)
			this.$store.commit("del",str)
		},
		sw(str,val){
			this.$store.commit("select",{id:str,select:val})
		}
	},
	components:{
		num
	}
}
</script>
