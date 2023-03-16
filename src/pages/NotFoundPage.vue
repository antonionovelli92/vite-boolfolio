<script>
export default {
    name: 'NotFoundPage',

}
</script>

<template>
    <div class="d-flex vh-100 flex-column align-items-center justify-content-center">
        <h2 class="text-center text-white">404 | Not Found</h2>
        <button type="submit" @click="$router.back()" class="btn btn-sm btn-secondary mt-3">INDIETRO </button>
        <!-- ? Con il rotuer link posso tornare solo alla home a differenza di un bottone -->
        <!-- <RouterLink to="/" class="btn btn-sm btn-secondary">TORNA ALLA HOME</RouterLink> -->
    </div>
</template>