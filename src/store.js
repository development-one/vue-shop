/*
* @Author: lenovo
* @Date:   2019-03-20 11:25:15
* @Last Modified by:   lenovo
* @Last Modified time: 2019-03-20 11:36:58
*/
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const caritem = JSON.parse(localStorage.getItem('car') || "[]")
const store = new Vuex.Store({
	state: {	/*this.$store.state.****/
		car: caritem
	},
	mutations: {	/*this.$store.commit("方法名","唯一参数")*/
		addcar(state,goodlist){
			var flag = false
			state.car.some(item=>{
				if(item.id == goodlist.id){
					item.count = item.count + goodlist.count
					flag = true
					return true;
				}
			})
			if(flag == false){
				state.car.push(goodlist)
			}
			localStorage.setItem("car",JSON.stringify(state.car))
		},
		updata(state,goodlist2){
			state.car.some(item=>{
				if(item.id == goodlist2.id){
					item.count = parseInt(goodlist2.count)
					return true;
				}
			})
			localStorage.setItem("car",JSON.stringify(state.car))
		},
		del(state,del){
			state.car.some((item,i)=>{
				if(item.id == del){
					state.car.splice(i,1)
					return true;
				}
			})
			localStorage.setItem("car",JSON.stringify(state.car))
		},
		select(state,str){
			state.car.some(item=>{
				if(item.id == str.id){
					item.select = str.select
				}
			})
			localStorage.setItem("car",JSON.stringify(state.car))
		}
	},
	getters: {	/*this.$store.getters.****/
		getAllCount(state){
			var c = 0
			state.car.forEach(item=>{
			c += item.count
				})
			return c
		},
		getCar(state){
			var a = []
			state.car.forEach(item=>{
				a[item.id] = item.count
			})
			return a
		},
		getSelect(state){
			var a = []
			state.car.forEach(item=>{
				a[item.id] = item.select
			})
			return a
		},
		getPrice(state){
			var a = {
				count: 0,
				price: 0
			}
			state.car.forEach(item=>{
				if(item.select){
					a.count += item.count
					a.price += item.price * item.count
				}
			})
			return a;
		}
	}
})
export default store