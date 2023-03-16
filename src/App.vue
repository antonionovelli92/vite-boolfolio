<script>
import AppHeader from './components/AppHeader.vue';
// import AppAlert from './components/AppAlert.vue';
// import AppPagination from './components/AppPagination.vue';

export default {
  name: 'App',
  components: { AppHeader },

}
</script>

<template>
  <AppHeader />
  <div class="container">
    <RouterView />
  </div>
</template>