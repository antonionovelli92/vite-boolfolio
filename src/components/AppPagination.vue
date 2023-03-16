<script>
export default {
    name: 'AppPagination',
    props: { links: Array },

};
</script>

<template>
    <nav>
        <ul class="pagination">

            <li v-for="link in links" :key="link.label" class="page-item"
                :class="[{ 'active': link.active }, { 'disabled': !link.url }]">
                <!-- uso il v-html per far vedere tradotto il risultato dell'html (potevo usare anche usare la doppia graffa con i punti esclamativi) -->
                <button type="button" :disabled="!link.url" class="page-link" href="#" v-html="link.label"
                    @click="$emit('change-page', link.url)"></button>
            </li>

        </ul>
    </nav>
</template>





<style scoped lang="scss"></style>
