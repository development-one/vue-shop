<template>
	<div class="comment">
		<h1>发表评论</h1>
		<textarea name="" id="" cols="0" rows="4" maxlength="50" placeholder="写下你想的小想法吧" v-model="msg">
		</textarea>
		<mt-button type="primary" size="large" class="but" @click="publish">发表</mt-button>
		<div class="pinlun">
			<div class="item" v-for="(item,index) in list" :key="index">
				<div class="info">
				第{{index+1}}楼&nbsp;&nbsp;用户:{{item.name}}&nbsp;&nbsp;发表时间:{{item.time | dataFormat}}
				</div>
				<div class="body">
					{{item.content}}
				</div>
			</div>		
		</div>
		<mt-button type="danger" size="large" plain class="but" @click="getmore" :disabled="aa">更多</mt-button>
	</div>
</template>
<style lang="scss" scoped>
	.comment{
		h1{
			font-size:28px;
			color: skyblue;
			margin-top: 20px;
			border-top: 1px dashed #666;
			padding-top: 10px;
		}
		textarea{
			border: 1px solid skyblue;
		
		}
		.but{
			margin-bottom:10px;
		}
		.pinlun{
			.info{
				font-size: 14px;
				margin: 20px 10px 5px 10px;
				box-sizing: border-box;
				background: skyblue;
			}
			.body{
				font-size: 18px;
				padding:0 10px 0 10px;
				line-height: 25px;
				box-sizing: border-box;
			}
		}
	}
</style>
<script>
import {Toast} from "mint-ui"
	export default{
		data(){
			return{
				page: 1,
				list: [],
				aa: false,
				msg: ""
			}
		},
		created(){
			this.getlist()
		},
		methods:{
			getlist(){
				this.$http.get("../../../public/api/newsinfo/"+this.id+"/"+this.page+".json").then(result=>{
					if(result.body.status===0){
						this.list = this.list.concat(result.body.message)
					}else{
						Toast("数据获取失败")
					}
				},function(){
					this.aa = true
				})
			},
			getmore(){
				this.page++,
				this.getlist()
			},
			publish(){
				if(this.msg.trim().length === 0 ){
					return Toast("评论不能为空")
				}
				var cmt = {
					name: "匿名用户",
					time: Date.now(),
					content: this.msg.trim()
				};
				this.list.unshift(cmt)
				this.msg = ""
				
			}
		},
		props: ["id"]
	}
</script>