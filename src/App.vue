<script>
import AppHeader from './components/AppHeader.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';


export default {
  data() {
    return {

    }
  },
  components: {
    AppHeader,
    ProjectsIndex,
  }
}
</script>

<template>
  <AppHeader />
  <ProjectsIndex />

</template>

<style scoped lang="scss">
@use "bootstrap/scss/bootstrap.scss" as *;
</style>