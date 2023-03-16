<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppAlert from './components/AppAlert.vue';
import AppPagination from './components/AppPagination.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
const apiBaseUrl = 'http://127.0.0.1:8000/api';

export default {
  name: 'App',
  components: { AppHeader, AppAlert, ProjectsList, AppPagination },
  data: () => ({
    // credo una condizione dove isloading parte falso(lo spinner di caaricamento) pwe poin inserirlo prima di una chiamata delle api;
    isLoading: false,
    hasError: false,
    projects: {
      data: [],
      links: [],
    },
  }),
  methods: {
    fetchProjects(endpoint = null) {
      this.isLoading = true;
      if (!endpoint) endpoint = apiBaseUrl + '/projects';
      axios.get(endpoint).then((res) => {
        const { data, links } = res.data;
        this.projects = { data, links };
      }).catch((err) => {
        this.hasError = true;
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
    <AppAlert :is-open="hasError" @close="hasError = false" class="my-3" />
    <AppLoader v-if="isLoading" />
    <ProjectsList v-else :projects="projects.data" />
    <footer>
      <AppPagination :links="projects.links" @change-page="fetchProjects" />
    </footer>
  </main>
</template>