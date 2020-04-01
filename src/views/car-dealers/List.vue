<template>
    <section id="carDealers">
        <!-- BREADCUM -->
        <mdb-card class="mb-4">
            <mdb-card-body class="d-sm-flex justify-content-between">
                <h4 class="mb-sm-0 pt-2">
                    Concesionarios
                </h4>

                <router-link to="/car-dealers/create">
                    <button type="button" class="btn btn-indigo">
                        <mdb-icon icon="file"/> Crear nuevo
                    </button>
                </router-link>

            </mdb-card-body>
        </mdb-card>

        <section id="list">
            <mdb-row>
                <mdb-col md="12" class="mb-4">
                    <mdb-card cascade narrow>
                        <mdb-card-body>
                            <mdb-tbl responsive>
                                <mdb-tbl-head class="blue lighten-4">
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>Ciudad</th>
                                        <th>Acciones</th>
                                    </tr>
                                </mdb-tbl-head>
                                <mdb-tbl-body>
                                    <tr v-for="carDealer in carDealers" :key="carDealer.id">
                                        <th scope="row">{{ carDealer.id }}</th>
                                        <td>{{ carDealer.name }}</td>
                                        <td>{{ carDealer.city.name }}</td>
                                        <td>
                                            <mdb-btn-group>
                                                <router-link :to="'/car-dealers/' + carDealer.id">
                                                    <mdb-btn size="sm" color="light-blue">
                                                        <mdb-icon icon="eye"/> Detalle
                                                    </mdb-btn>
                                                </router-link>

                                                <router-link :to="'customers/car-dealer/' + carDealer.id">
                                                    <mdb-btn size="sm" color="dark-green">
                                                        <mdb-icon icon="users"/> Ver Clientes
                                                    </mdb-btn>
                                                </router-link>

                                                <router-link :to="'/car-dealers/' + carDealer.id + '/edit'">
                                                    <mdb-btn size="sm" color="mdb-color">
                                                        <mdb-icon icon="edit"/> Editar
                                                    </mdb-btn>
                                                </router-link>
                                            </mdb-btn-group>
                                        </td>
                                    </tr>
                                </mdb-tbl-body>
                            </mdb-tbl>
                        </mdb-card-body>
                    </mdb-card>
                </mdb-col>
            </mdb-row>
        </section>
    </section>
</template>

<script>
    import {
        mdbRow,
        mdbCol,
        mdbCard,
        mdbBtn,
        mdbBtnGroup,
        mdbCardBody,
        mdbTbl,
        mdbTblHead,
        mdbTblBody,
        mdbIcon
    } from 'mdbvue';
    import axios from 'axios';

    export default {
        name: 'List',
        components: {
            mdbRow,
            mdbCol,
            mdbCard,
            mdbBtn,
            mdbBtnGroup,
            mdbCardBody,
            mdbTbl,
            mdbTblHead,
            mdbTblBody,
            mdbIcon
        },
        data() {
            return {
                carDealers: []
            };
        },
        methods: {
            destroy( id ) {
                axios.delete( 'http://127.0.0.1:8001/api/car-dealers/' + id )
                    .then( response => response.data )
                    .then( apiResponse => {
                        if ( apiResponse.success === true ) {
                            alert( 'eliminado' );

                            this.carDealers = this.carDealers.filter( ( carDealer ) => {
                                return carDealer.id !== id;
                            } );
                        }
                    } )
                    .catch(
                        err => console.log( err )
                    );
            }
        },
        mounted(){
            axios.get( 'http://127.0.0.1:8001/api/car-dealers' )
                .then( response => response.data )
                .then( apiResponse => {
                    let data = apiResponse.data;
                    data.map( entry => this.carDealers.push( entry ) );
                } )
                .catch(
                    err => console.log( err )
                );
        }
    }
</script>

<style scoped>
    .card.card-cascade .view.gradient-card-header {
        padding: 1rem 1rem;
        text-align: center;
    }
    .card.card-cascade h3,
    .card.card-cascade h4 {
        margin-bottom: 0;
    }
</style>
