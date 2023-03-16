<script>
import axios from 'axios';
import ProjectCard from '../components/projects/ProjectCard.vue';
const apiBaseUrl = 'http://127.0.0.1:8000/api/';

export default {
    name: 'ProjectDetailPage',
    components: { ProjectCard },
    data: () => ({
        project: null,
        isLoading: false
    }),
    methods: {
        getProject() {
            this.isLoading = true;
            const endpoint = apiBaseUrl + 'projects/' + this.$route.params.id;
            axios.get(endpoint).then(res => {
                this.project = res.data;
            }).catch(err => {
                console.log(err);
            }).then(() => {
                this.isLoading = false;
            });
        }
    },
    created() {
        this.getProject();
    }

};
</script>

<template>
    <AppLoader v-if="isLoading" />
    <ProjectCard v-else :project="project" :isDetail="true" />
</template>