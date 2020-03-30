<template>
    <section id="customers">
        <!-- BREADCUM -->
        <mdb-card class="mb-4">
            <mdb-card-body class="d-sm-flex justify-content-between">
                <h4 class="mb-sm-0 pt-2">
                    <router-link to="/customers">
                        <span>
                            Clientes
                        </span>
                    </router-link>

                    <span>/</span>

                    <span>Detalle #{{ $route.params.id }}</span>
                </h4>

            </mdb-card-body>
        </mdb-card>

        <section id="show">
            <mdb-row>
                <mdb-col md="12" class="mb-4">
                    <mdb-card cascade narrow>

                        <p>Nombre: {{ customer.name }}</p>
                        <p>Apellido: {{ customer.lastname }}</p>
                        <p>DNI: {{ customer.dni }}</p>
                        <p>E-mail: {{ customer.email }}</p>
                        <p>Dirección: {{ customer.address }}</p>
                        <p>Concesionario: {{ customer.car_dealer.name }}</p>

                        <router-link to="/customers">
                            <mdb-btn size="lg" outline="gray">
                                Volver
                            </mdb-btn>
                        </router-link>
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
        mdbCardBody
    } from 'mdbvue';
    import axios from 'axios';

    export default {
        name: 'Show',
        components: {
            mdbRow,
            mdbCol,
            mdbCard,
            mdbBtn,
            mdbCardBody
        },
        data() {
            return {
                customer: {
                    name: null,
                    lastname: null,
                    dni: null,
                    email: null,
                    address: null,
                    car_dealer_id: null,
                    car_dealer: {}
                }
            };
        },
        methods: {},
        mounted(){
            axios.get( 'http://127.0.0.1:8000/api/customers/' + this.$route.params.id )
                .then( response => response.data )
                .then( apiResponse => {
                    let data = apiResponse.data;
                    console.log( data );
                    this.customer = data;
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
    .form-group .custom-select:valid.is-invalid {
        border-color: #dc3545;
    }
</style>
