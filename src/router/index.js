import Vue from 'vue'
import App from '../App'
import Router from 'vue-router'

import Index from '@/page/index'
import Indepe2 from '@/page/page2'
import Indepe3 from '@/page/page3'
import Frames1 from '@/frame/frame1'
import Frames2 from '@/frame/frame2'
import Frames3 from '@/frame/frame3'

Vue.use(Router)

// export default new Router({
//  	routes: [
// 		{	
//  	    path: '/',
//  	   	component: Index,
//  	   	children:[
//  	   		{
//  	   			path: '/frame1',
//  	   			component: Frames1
//  	   		},
//  	   		{
//  	   			path: '/frame2',
//  	   			component: Frames2
//  	   		},
//  	   		{
//  	   			path: '/frame3',
//  	   			component: Frames3
//  	   		},]
// 		},
// 		{
//  	  	path: '/page2',
//  	  	component:Indepe2
// 		},
// 		{
//  	  	path: '/page3',
//  	  	component:Indepe3
// 		},
//  	]
// })

const router = new Router({
  	routes: [
		{	
 	    path: '/',
 	   	component: Index,
 	   	children:[
 	   		{
 	   			path: '/frame1',
 	   			component: Frames1
 	   		},
 	   		{
 	   			path: '/frame2',
 	   			component: Frames2
 	   		},
 	   		{
 	   			path: '/frame3',
 	   			component: Frames3
 	   		},]
		},
		{
 	  	path: '/page2',
 	  	component:Indepe2
		},
		{
 	  	path: '/page3',
 	  	component:Indepe3
		},
 	]
})

router.beforeEach((to, from, next) => {
    next();
});

router.afterEach((to, from, next) => {
	console.log(to.path);
})

new Vue({
  	el: '#app',
  	router,
  	template: '<App/>',
  	components: { App }
})