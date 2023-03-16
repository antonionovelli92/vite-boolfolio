<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppAlert from './components/AppAlert.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
const apiBaseUrl = 'http://127.0.0.1:8000/api';

export default {
  name: 'App',
  components: { AppHeader, AppAlert, ProjectsList },
  data: () => ({
    // credo una condizione dove isloading parte falso(lo spinner di caaricamento) pwe poin inserirlo prima di una chiamata delle api;
    isLoading: false,
    hasError: false,
    projects: [],
  }),
  methods: {
    fetchProjects() {
      this.isLoading = true;
      axios.get(apiBaseUrl + '/projects').then((res) => {
        this.projects = res.data;
      }).catch((err) => {
        console.error(err);
      }).then(() => {
        this.isLoading = false
      })
    }
  },
  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  <AppHeader />
  <main class="container">
    <AppAlert :is-open="hasError" @close="hasError = false" />
    <AppLoader v-if="isLoading" />
    <ProjectsList v-else :projects="projects" />
  </main>
</template>