<template>
	<div id="main">
		<HeadTop></HeadTop>
		<div id="content">
			<MenuLeft></MenuLeft>
			<div id="contentRigh">
				<router-view></router-view>
		  </div>
		</div>
		<Foot></Foot>
	</div>
</template>
<script type="text/javascript">
	import Vue from 'vue'
	import Router from 'vue-router'
	import App from '../App'
 	import HeadTop from '../components/header.vue'
 	import Foot from '../components/footer.vue'
	import MenuLeft from '../components/menu.vue'
	 
	Vue.use(Router)
 	const routers = [  
	    {path: '../components/header.vue', component: HeadTop},  
	    {path: '../components/footer.vue', component: Foot},  
	    {path: '../components/menu.vue', component: MenuLeft}  
	    ];  
	const router = new Router({  
	    linkActiveClass: 'active',  
	    routes: routers  
	});  
	/* eslint-disable no-new */  
	new Vue({  
	  template: '<App/>',  
	  components: { App },  
	  router: router  
	}).$mount('#app');
	export default{
		components:{HeadTop,Foot,MenuLeft},
		data(){
			return{
				id:"1212",
				nn:123
			}
		},
		methods: {
			getApi(){
				//调取接口方式 get（post同样）-接口名称mock-参数传递：无-成功函数-失败函数（可写可不写）
				this.$api.get("mock",null,r=>{
					console.log("success");
					console.log(r)
				},r=>{
					console.log("fail");
					console.log(r)
				})
			},
			postApi(){
				//调取接口方式 get（post同样）-接口名称mock-参数传递：有-成功函数-失败函数（可写可不写）				
				let data={
					id:55
				};
				this.$api.get("proxy",data,r=>{
					console.log("success");
					console.log(r)
				},r=>{
					console.log("fail");
					console.log(r)
				})
			}
		},
		created(){
			// this.getApi();
			this.postApi();
			console.log(this.id);
		}
	}
</script>