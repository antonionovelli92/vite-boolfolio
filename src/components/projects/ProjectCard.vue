<script>
export default {
    name: 'ProjectCard',
    props: { project: Object }
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
            <time><small>Pubblicato il</small>{{ project.updated_at }}</time>
        </div>
    </div>
</template>
