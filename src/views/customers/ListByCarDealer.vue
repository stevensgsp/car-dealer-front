<template>
    <section id="customers">
        <!-- BREADCUM -->
        <mdb-card class="mb-4">
            <mdb-card-body class="d-sm-flex justify-content-between">
                <h4 class="mb-sm-0 pt-2">
                    Clientes de Concesionario <strong># {{ $route.params.id }}</strong>
                </h4>

                <router-link to="/car-dealers">
                    <mdb-btn size="lg" outline="gray">
                        Volver
                    </mdb-btn>
                </router-link>

            </mdb-card-body>
        </mdb-card>

        <section id="list">
            <mdb-row>
                <mdb-col md="12" class="mb-4">
                    <mdb-card cascade narrow>
                        <mdb-card-body>
                            <ListTable v-bind:items="customers"/>
                        </mdb-card-body>
                    </mdb-card>
                </mdb-col>
            </mdb-row>
        </section>
    </section>
</template>

<script>
    import {
        mdbBtn,
        mdbRow,
        mdbCol,
        mdbCard,
        mdbCardBody
    } from 'mdbvue';
    import axios from 'axios';
    import ListTable from '@/views/customers/ListTable.vue'

    export default {
        name: 'List',
        components: {
            mdbBtn,
            mdbRow,
            mdbCol,
            mdbCard,
            mdbCardBody,
            ListTable
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
            axios.get( 'http://127.0.0.1:8000/api/customers/car-dealer/' + this.$route.params.id  )
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
