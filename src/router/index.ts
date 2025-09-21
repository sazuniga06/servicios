import ConsumoServicioView from "@/views/ConsumoServicioView.vue"
import DetallesServicioView from "@/views/DetallesServicioView.vue"
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> =[
    {
        path: '/',
        redirect: to => {return {name: 'PostList'}}
    },
    {
        path: '/post',
        name: 'PostList',
        component: ConsumoServicioView,
    },
    {
        path: '/post/:id',
        name: 'PostDetail',
        component: DetallesServicioView

    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router