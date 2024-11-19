<script>
import axios from 'axios';
import AppLoader from '../components/AppLoader.vue';

export default {
    data() {
        return {
            projectList: [],
            ApiURL: "http://127.0.0.1:8000/api/projects",
            loaded: false
        }
    },
    methods: {
        getProjects() {
            axios.get(this.ApiURL)
                .then((response) => {
                    // handle success
                    console.log(response.data.results);
                    this.projectList = response.data.results
                    this.loaded = true
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    },
    components: {
        AppLoader,
    },
    created() {
        this.getProjects();
    },

}
</script>

<template>

    <section class="loader d-flex py-5" v-if="!loaded">
        <AppLoader />
    </section>

    <div class="container" v-else>
        <h1 class="text-center my-3 ">My projects</h1>
        <div class="row row-cols-3 my-5 row-gap-3">
            <div class="col" v-for="project in projectList" :key="project.id">
                <div class="card h-100">
                    <img :src="project.image_url" class="card-img-top h-75 object-fit-contain" alt="...">
                    <div class="card-body">
                        <h2 class="card-title">
                            {{ project.title }}
                        </h2>
                        <p class="card-text">
                            {{ project.description }}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>