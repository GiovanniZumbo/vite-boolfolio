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
        <h1 class="text-center my-3">My projects</h1>
        <div class="row row-cols-3" v-for="project in projectList">
            <div class="col">
                <div class="card">
                    <div class="card-title">
                        title
                    </div>
                    <div class="card-body">

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>