<template>
    <div class="bg_grey">
        <h1 class="text-center py-3">{{ title }}</h1>
        <img src="@/assets/girl.jpg" alt="Работающая девушка">
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
    .bg_grey {
        background-color: #efefef;
    }
</style>