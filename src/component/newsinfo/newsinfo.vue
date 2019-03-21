<template>
	<div class="newsinfo">
		<h3>{{list.titile}}</h3>
		<div class="fb">
			<span>发表时间:{{list.time | dataFormat}}</span>
			<span>点击次数{{list.click}}次</span>
		</div>
		<div class="content">
			{{list.content}}
		</div>
		<com :id="id"></com>
	</div>
</template>
<style lang="scss" scoped>
	.newsinfo{
		h3{
			color:red;
			text-align: center;
			margin: 10px 0 10px 0;
		}
		.fb{
			display: flex;
			justify-content: space-between;
			color: skyblue;
			font-size: 16px;
			border-bottom: 1px solid #666;
			padding: 0 10px 0 10px;
		}
		.content{
			color:#333;
			font-size: 18px;
			margin-top: 10px;
			padding: 0 6px 0 6px;
			letter-spacing: 0.2em;
			line-height: 30px;
			text-indent: 2em;
			white-sapce: pre-line;
			cursor: text;
		}
	}
</style>
<script>
import {Toast} from "mint-ui"
import comment from "@/component/comments/comments.vue"
export default{
	data(){
		return{
			id: this.$route.params.id,
			list: {}
		}
	},
	created(){
		this.getlist()
	},
	methods:{
		getlist(){
			this.$http.get("../../../public/api/newsinfo/"+this.id+".json").then(result=>{
				if(result.body.status===0){
					this.list = result.body.message[0]
				}else{
					Toast("数据获取失败")
				}
			})
		}
	},
	components:{
		"com": comment
	}
}
</script>
