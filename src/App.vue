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

      <nav>
        <ul class="pagination">

          <li v-for="link in projects.links" :key="link.label" class="page-item"
            :class="[{ 'active': link.active }, { 'disabled': !link.url }]">
            <!-- uso il v-html per far vedere tradotto il risultato dell'html (potevo usare anche usare la doppia graffa con i punti esclamativi) -->
            <button type="button" :disabled="!link.url" class="page-link" href="#" v-html="link.label"
              @click="fetchProjects(link.url)"></button>
          </li>

        </ul>
      </nav>

    </footer>
  </main>
</template>