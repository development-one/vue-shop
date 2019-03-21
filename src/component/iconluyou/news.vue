<template>
	<div>
		<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="'/shouye/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.url">
						<div class="mui-media-body">
							<h3>{{item.title}}</h3>
							<div class="fabiao">
								<span>发表时间:{{item.time}}</span>
								<span>点击次数:{{item.number}}</span>
							</div>
						</div>
					</router-link>
				</li>
		</ul>
	</div>
</template>
<style lang="scss" scoped>
	.mui-table-view{
		li{
			img{
				width:52px;
				height:46px;
			}
			h3{
				font-size:16px;
			}
			.fabiao{
				font-size:14px;
				color: skyblue;
				display: flex;
				justify-content: space-between;
			}
			
			
		}
	}
</style>
<script>
import {Toast} from "mint-ui"
	export default{
		data(){
			return{
				newslist: []
			}
		},
		created(){
			this.getnews()
		},
		methods:{
			getnews(){
				this.$http.get("../../../public/api/news.json").then(result=>{
					if(result.body.status === 0 ){
						this.newslist = result.body.message
					}else{
						Toast("数据获取失败")
					}
				})
			}
		}
	}
</script>
