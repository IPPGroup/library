import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import mainpage from '@/components/mainpage'
import drawer from '@/components/drawer'
import showhotel from '@/components/showhotel'
import showspot from '@/components/showspot'
import addspot from '@/components/addspot'
import ticketorder from '@/components/ticketorder'
import hotelorder from '@/components/hotelorder'
import login from '@/components/login'
import register from '@/components/register'
import hotelinfo from '@/components/hotelinfo'
import showadmin from '@/components/showadmin'
import spotinfo from '@/components/spotinfo'
import hotelorderinfo from '@/components/hotelorderinfo'
import ticketorderinfo from '@/components/ticketorderinfo'
import addadmin from '@/components/addadmin'

Vue.use(Router)
 
export default new Router({
  routes: [
	{
		path:'/',
		name:'login',
		component: login,
	},
	{
		path:'/register',
		name:'register',
		component: register,
	},
    { path: '/mainpage', 
	name: 'mainpage', 
	meta:{title:'功能列表',noCache: true},
	components: {
		'default':mainpage,
		'left':drawer,
		'main':drawer,
	},
	children:[
		{
			path:'showhotel',
			component:showhotel,
			name:'Showhotel',
			meta:{title:'酒店信息管理',noCache: true},
			children:[{path:'hotelinfo',component:hotelinfo,name:'Hotelinfo',meta:{title:'房间具体信息',noCache:true}}]
		},
		{
			path:'showspot',
			component:showspot,
			name:'Showspot',
			meta:{title:'景点信息管理',noCache: true},
			children:[{path:'spotinfo',component:spotinfo,name:'Spotinfo',meta:{title:'门票具体信息',noCache:true}}]
		},
		{
			path:'addspot',
			component:addspot,
			name:'Addspot',
			meta:{title:'添加门票',noCache: true},
		},
		{
			path:'ticketorder',
			component:ticketorder,
			name:'Ticketorder',
			meta:{title:'门票订单',noCache: true},
			children:[{path:'ticketorderinfo',component:ticketorderinfo,name:'Ticketorderinfo',meta:{title:'门票订单具体信息',noCache:true}}]
		},
		{
			path:'hotelorder',
			component:hotelorder,
			name:'Hotelorder',
			meta:{title:'酒店订单',noCache: true},
			children:[{path:'hotelorderinfo',component:hotelorderinfo,name:'Hotelorderinfo',meta:{title:'酒店订单具体信息',noCache:true}}]
		},
		{
			path:'showadmin',
			component:showadmin,
			name:'showadmin',
			meta:{title:'账号信息',noCache: true},
		},
		{
			path:'addadmin',
			component:addadmin,
			name:'addadmin',
			meta:{title:'添加管理员信息',noCache: true},
		},
	],
	},
	
   ]
  
})