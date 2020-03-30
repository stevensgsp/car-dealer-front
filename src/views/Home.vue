<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <Charts msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Charts from '@/components/Charts.vue'

    export default {
        name: 'Home',
        components: {
            Charts
        }
    }
</script>
