<template>
    <div class="flexible-content">
        <Sidebar/>
        <main>
            <div class="mt-5 p-5">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>

<script>
    import Sidebar from '@/components/Sidebar.vue'
    import {
        waves
    } from "mdbvue";

    export default {
        name: 'App',
        components: {
            Sidebar
        },
        mixins: [ waves ]
    }
</script>

<style>
    @import url( "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" );
    </style>

    <style>
    main {
        background-color: #ededee;
    }

    .flexible-content {
        transition: padding-left 0.3s;
        padding-left: 270px;
    }

    @media ( max-width: 1199.98px ) {
        .flexible-content {
            padding-left: 0;
        }
    }
</style>
