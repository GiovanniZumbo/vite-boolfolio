<script>
import axios from 'axios';

export default {
    data() {
        return {
            projectList: [],
            ApiURL: "http://127.0.0.1:8000/api/projects",
        }
    },
    methods: {
        getProjects() {
            axios.get(this.ApiURL)
                .then((response) => {
                    // handle success
                    console.log(response.data.results);
                    this.projectList = response.data.results
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    },
    created() {
        this.getProjects();
    },

}
</script>

<template>
    <div class="container">
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