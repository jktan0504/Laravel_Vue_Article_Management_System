<template lang="html">
    <div class="">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from '../_included/header/header';
    export default {
        components: {
            appHeader: Header,
        }
    }
</script>

<style lang="css" scoped>
</style>
