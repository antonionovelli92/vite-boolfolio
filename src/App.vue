<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/HomePage.vue';
// import AppAlert from './components/AppAlert.vue';
// import AppPagination from './components/AppPagination.vue';

export default {
  name: 'App',
  components: { AppHeader, HomePage },

}
</script>

<template>
  <AppHeader />
  <HomePage />
</template>