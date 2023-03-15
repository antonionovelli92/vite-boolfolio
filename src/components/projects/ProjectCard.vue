<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
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
        }
    }
}
</script>

<template>
    <div class="card my-3">
        <div class="card-header">
            <h2>{{ project.title }}</h2>
        </div>
        <div class="card-body d-flex justify-content-between">
            <p>{{ project.content }}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
            <address>By {{ project.author }}</address>
            <time><small>Pubblicato il</small> {{ postDate }}</time>
        </div>
    </div>
</template>
