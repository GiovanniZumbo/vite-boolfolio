<script>
import axios from 'axios';;


export default {
    name: "SingleProject",
    data() {
        return {
            singleProject: {},
            ApiURL: "http://127.0.0.1:8000/api/projects",
        }
    },
    methods: {
        getSingleProject() {
            axios.get(`${this.ApiURL}/${this.$route.params.id}`)
                .then((response) => {
                    // handle success
                    console.log(response.data.results);
                    this.singleProject = response.data.results
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    },
    created() {
        this.getSingleProject();
    }
}
</script>

<template>
    <div class="container">

        <h1 class="text-center my-4">
            Progetto: {{ singleProject.title }}
        </h1>

        <div class="row ">
            <div class="col-12 d-flex flex-column justify-content-center align-items-center">
                <img :src="singleProject.image_url" class="img-fluid" alt="`${singleProject.title} image`">
                <p>
                    {{ singleProject.description }}
                </p>
                <p>
                    Git Url: {{ singleProject.git_url }}
                </p>
            </div>
        </div>

    </div>
</template>

<style scoped></style>