<script>
export default {
    name: 'NotFoundPage',

}
</script>

<template>
    <div class="d-flex vh-100 flex-column align-items-center justify-content-center">
        <h2 class="text-center text-white">404 | Not Found</h2>
        <button type="submit" @click="$router.back()" class="btn btn-sm btn-secondary">INDIETRO</button>
    </div>
</template>