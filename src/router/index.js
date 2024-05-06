import VueRouter from "vue-router"
// 引入组件
import Home from "@/page/BlogHome.vue"

export default new VueRouter({
	routes: [
		{
			path: "/",
			redirect: "/home"
		},
		{
			path: "/home",
			component: Home
		}
	]
})