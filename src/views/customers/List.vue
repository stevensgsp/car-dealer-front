<template>
    <section id="customers">
        <!-- BREADCUM -->
        <mdb-card class="mb-4">
            <mdb-card-body class="d-sm-flex justify-content-between">
                <h4 class="mb-sm-0 pt-2">
                    Clientes
                </h4>

                <router-link to="/customers/create">
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
                                        <th>DNI</th>
                                        <th>E-mail</th>
                                        <th>Concesionario</th>
                                        <th>Acciones</th>
                                    </tr>
                                </mdb-tbl-head>
                                <mdb-tbl-body>
                                    <tr v-for="customer in customers" :key="customer.id">
                                        <th scope="row">{{ customer.id }}</th>
                                        <td>{{ customer.name }} {{ customer.lastname }}</td>
                                        <td>{{ customer.dni }}</td>
                                        <td>{{ customer.email }}</td>
                                        <td>{{ customer.car_dealer.name }}</td>
                                        <td>
                                            <mdb-btn-group>
                                                <router-link :to="'/customers/' + customer.id">
                                                    <mdb-btn size="sm" color="light-blue">
                                                        <mdb-icon icon="eye"/> Detalle
                                                    </mdb-btn>
                                                </router-link>

                                                <router-link :to="'/customers/' + customer.id + '/edit'">
                                                    <mdb-btn size="sm" color="mdb-color">
                                                        <mdb-icon icon="edit"/> Editar
                                                    </mdb-btn>
                                                </router-link>

                                                <a>
                                                    <mdb-btn size="sm" color="pink" @click="destroy(customer.id)">
                                                        <mdb-icon icon="trash"/> Eliminar
                                                    </mdb-btn>
                                                </a>
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
                customers: []
            };
        },
        methods: {
            destroy( id ) {
                axios.delete( 'http://127.0.0.1:8000/api/customers/' + id )
                    .then( response => response.data )
                    .then( apiResponse => {
                        if ( apiResponse.success === true ) {
                            alert( 'eliminado' );

                            this.customers = this.customers.filter( ( customer ) => {
                                return customer.id !== id;
                            } );
                        }
                    } )
                    .catch(
                        err => console.log( err )
                    );
            }
        },
        mounted(){
            axios.get( 'http://127.0.0.1:8000/api/customers' )
                .then( response => response.data )
                .then( apiResponse => {
                    let data = apiResponse.data;
                    data.map( entry => this.customers.push( entry ) );
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
