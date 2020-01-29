import Vue from 'vue'
import Router from 'vue-router'
import NuevoEditar from '../components/NuevoEditar.vue'
import Tabla from '../components/Tabla.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Tabla
        },
        {
            path: '/tabla',
            component: Tabla
        },
        {
            path: '/editar/:id',
            component: NuevoEditar,
            props: true
        },
        {
            path: '/nuevo',
            component: NuevoEditar
        }
    ]
})
