<script>
export default {
    name: 'AppAlert',
    props: { isOpen: Boolean },
    emits: ['close']
}
</script>

<template>
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Errore!</strong> Si è verificato un problema nel recupero dei progetti.
        <button type="button" class="btn-close" @click="$emit('close')"></button>
    </div>
</template>





<style scoped lang="scss"></style>
