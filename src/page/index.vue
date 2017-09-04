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
			
			}
		},
		methods: {},
		created(){}
	}
</script>