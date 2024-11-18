import { createWebHistory, createRouter } from 'vue-router'

import ProjectsIndex from '../pages/ProjectsIndex.vue'
import AboutMe from '../pages/AboutMe.vue'

const routes = [
    { path: '/', component: ProjectsIndex, name: "index" },
    { path: '/about', component: AboutMe, name: "about-me" },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router }