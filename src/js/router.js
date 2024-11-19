import { createWebHistory, createRouter } from 'vue-router'

import ProjectsIndex from '../pages/ProjectsIndex.vue'
import AboutMe from '../pages/AboutMe.vue'
import SingleProject from '../pages/SingleProject.vue'

const routes = [
    { path: '/projects', component: ProjectsIndex, name: "projects.index" },
    { path: '/about', component: AboutMe, name: "about-me" },
    { path: '/projects/:id', component: SingleProject, name: "projects.show" },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router }