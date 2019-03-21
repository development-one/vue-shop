<template>
	<div class="lunbo" :class="{hehe:xixi}">
		<mt-swipe :auto="4000">
  		<mt-swipe-item v-for="item in lunbolist" :key="item.src"><a href="javascript:;"><img :src="item.src" alt=""></a></mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<style lang="scss" scoped>
	.lunbo{		
		height: 200px;
	}
	.hehe{
		height:240px;
	}
	.mint-swipe-item{
		img{
			width:100%;
			height:100%;
		}		
	}
</style>
<script>
export default{
	data(){
		return{
			lunbolist: [],
			xixi:this.bb	
		}
	},
	created(){
		this.getlunbo()
	},
	props: ["id","bb"],
	methods:{
		getlunbo(){
			this.$http.get("../../../public/api/picture/pictureinfo/suolvetu/"+this.id+".json").then(function(result){
					if(result.body.status === 0){
						this.lunbolist = result.body.message
				}else{
					Toast({
						  message: '数据获取失败',
						  position: 'middle',
						  duration: 5000
						});
				}
			})
		}
	}
}
</script>