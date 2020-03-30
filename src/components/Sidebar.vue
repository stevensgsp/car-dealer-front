<template>
    <div class="sidebar-fixed position-fixed">
        <a class="logo-wrapper">
            <h2 class="title pt-4 text-center text-md-left">
                <strong>Panel</strong>
            </h2>
        </a>
        <mdb-list-group class="list-group-flush">
            <router-link to="/" @click.native="activeItem = 1">
                <mdb-list-group-item
                    :action="true"
                    :class="activeItem === 1 && 'active'">
                    <mdb-icon icon="chart-pie" class="mr-3"
                    />Principal
                </mdb-list-group-item>
            </router-link>
            <router-link to="/customers" @click.native="activeItem = 2">
                <mdb-list-group-item
                    :action="true"
                    :class="activeItem === 2 && 'active'">
                    <mdb-icon icon="user" class="mr-3"
                    />Clientes
                </mdb-list-group-item >
            </router-link>
            <router-link to="/car-dealers" @click.native="activeItem = 3">
                <mdb-list-group-item
                    :action="true"
                    :class="activeItem === 3 && 'active'">
                    <mdb-icon icon="car" class="mr-3"
                    />Concesionarios
                </mdb-list-group-item>
            </router-link>
        </mdb-list-group>
    </div>
</template>

<script>
    import {
        mdbListGroup,
        mdbListGroupItem,
        mdbIcon
    } from "mdbvue";

    export default {
        name: 'App',
        components: {
            mdbListGroup,
            mdbListGroupItem,
            mdbIcon
        },
        data() {
            return {
                activeItem: 1
            };
        }
    }
</script>

<style>
    .sidebar-fixed {
        left: 0;
        top: 0;
        height: 100vh;
        width: 270px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        z-index: 1050;
        background-color: #fff;
        padding: 1.5rem;
        padding-top: 0;
    }

    .sidebar-fixed .logo-wrapper img {
        width: 100%;
        padding: 2.5rem;
    }

    .sidebar-fixed .list-group-item {
        display: block !important;
        transition: background-color 0.3s;
    }

    .sidebar-fixed .list-group .active {
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        border-radius: 5px;
    }

    @media (max-width: 1199.98px) {
        .sidebar-fixed {
            display: none;
        }
    }
</style>
