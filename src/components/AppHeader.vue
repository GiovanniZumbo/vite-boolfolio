<script>
import { RouterLink } from 'vue-router';

export default {
    name: "AppHeader",
    data() {
        return {

        }
    }
}
</script>

<template>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link :to="{ name: 'index' }" class="navbar-brand">Boolfolio</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link :to="{ name: 'index' }" class="nav-link active"
                            aria-current="page">Index</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'about-me' }" class="nav-link">About Me</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<style scoped></style>