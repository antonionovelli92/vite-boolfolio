<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object,
        isDetail: Boolean
    },
    computed: {
        postDate() {
            const date = new Date(this.project.updated_at);
            let day = date.getDay();
            let month = date.getMonth();
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();


            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;

            return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`
        },
        abstract() {
            const abstract = this.project.content.slice(0, 200);
            return abstract + '...';
        }
    }
}
</script>

<template>
    <div class="card my-3">
        <div class="card-header">
            <h2 v-if="project.title">{{ project.title }}</h2>
            <h2 v-else>Titolo non disponibile</h2>
        </div>
        <div class="card-body d-flex justify-content-between ">
            <img v-if="project.image" :src="project.image" :alt="project.slug" class="img-fluid">
            <p>{{ isDetail ? project.content : abstract }}</p>
        </div>
        <div class="card-footer d-flex justify-content-between align-items-center">
            <div>
                <address>By {{ project.author }}</address>
                <time><small>Pubblicato il</small> {{ postDate }}</time>
            </div>
            <!-- <router-link :to="`/projects/${project.id}`">Vedi</router-link> -->
            <router-link v-if="!isDetail" class="btn btn-primary"
                :to="{ name: 'project-detail', params: { id: project.id } }">Vedi</router-link>
        </div>
    </div>
</template>
