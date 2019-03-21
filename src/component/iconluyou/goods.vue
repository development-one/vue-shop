<template>
	<div class="goods">
		<router-link class="item" v-for="item in list" :key="item.id" :to="'/shouye/goods/goodinfo/'+item.id" tag="div">
			<div class="head">
				<img :src="item.img" alt="">
				<h3>{{item.title}}</h3>
			</div>
			<div class="bottom">
				<div class="price">
					<span>￥{{item.newprice}}</span>
					<span>￥{{item.oldprice}}</span>
				</div>
				<div class="info">
					<span>热卖中</span>
					<span>剩{{item.number}}件</span>
				</div>
			</div>
		</router-link>
	</div>
</template>
<style lang="scss" scoped>
	.goods{
		padding: 6px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.item{
			width: 49%;
			padding: 5px;
			box-sizing: border-box;
			border: 1px solid #999;
			margin-bottom: 8px;
			box-shadow: 1px 0px 2px 2px rgba(0,0,0,0.1d);
			&:last-child{
				margin-bottom: 6px;
			}
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.head{
				text-align: center;
				img{
					width: 100%;
				}
				h3{
					font-size: 18px;
					text-align: left;
					max-height: 80px;
					line-height: 20px;
					overflow: hidden;
				}
			}
			.bottom{
					margin-top: 16px;
				.price{
					span{
						&:nth-child(1){
							color: red;
							font-size: 22px;
							margin-left: -4px;
						}
						&:nth-child(2){
							font-size: 16px;
							margin-left: 10px;
							text-decoration: line-through;
							color: #666;
						}
					}
				}
				.info{
					display: flex;
					justify-content: space-between;
					font-size: 14px;
					color: #555;
				}
			}
		}
	}
</style>
<script>
export default{
	data(){
		return{
			list: []
		}
	},
	created(){
		this.getlist()
	},
	methods:{
		getlist(){
			this.$http.get("../../../public/api/goods/goods.json").then(result=>{
				this.list = result.body.message
			},function(err){
				alert("api接口错误")	
			})
		}
	}
}
</script>
