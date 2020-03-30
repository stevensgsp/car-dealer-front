<template>
    <section id="carDealers">
        <!-- BREADCUM -->
        <mdb-card class="mb-4">
            <mdb-card-body class="d-sm-flex justify-content-between">
                <h4 class="mb-sm-0 pt-2">
                    <router-link to="/car-dealers">
                        <span>
                            Concesionarios
                        </span>
                    </router-link>

                    <span>/</span>

                    <span>Crear</span>
                </h4>

            </mdb-card-body>
        </mdb-card>

        <section id="create">
            <mdb-row>
                <mdb-col md="12" class="mb-4">
                    <mdb-card cascade narrow>
                        <mdb-card-body>
                            <form class="text-center p-5" @submit.prevent="create" novalidate>

                                <!-- Name -->
                                <mdb-input label="Nombre" type="text" v-model="carDealer.name"
                                    :inputClass="typeof errors.name !== 'undefined' ? 'is-invalid' : ''"
                                    :invalidFeedback="errors.name"/>

                                <!-- Description -->
                                <mdb-input label="Descripción" type="text" v-model="carDealer.description"
                                    :inputClass="typeof errors.description !== 'undefined' ? 'is-invalid' : ''"
                                    :invalidFeedback="errors.description"/>

                                <!-- Location -->
                                <mdb-input label="Location" type="text" v-model="carDealer.location"
                                    :inputClass="typeof errors.location !== 'undefined' ? 'is-invalid' : ''"
                                    :invalidFeedback="errors.location"/>

                                <!-- CarDealer -->
                                <div class="form-group">
                                    <select class="browser-default custom-select" v-model="carDealer.city_id"
                                        :class="typeof errors.city_id !== 'undefined' && 'is-invalid'" novalidate>
                                        <option disabled selected>Seleccione concesionario</option>
                                        <option v-for="city in cities" :key="city.id" :value="city.id">{{ city.name }}</option>
                                    </select>
                                    <div class="invalid-feedback">{{ errors.city_id }}</div>
                                </div>

                                <!-- Save Button -->
                                <mdb-btn size="lg" color="indigo" type="submit">
                                    <mdb-icon icon="save"/> Guardar
                                </mdb-btn>

                                <router-link to="/car-dealers">
                                    <mdb-btn size="lg" outline="gray">
                                        Volver
                                    </mdb-btn>
                                </router-link>

                            </form>
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
        mdbInput,
        mdbBtn,
        mdbCardBody,
        mdbIcon
    } from 'mdbvue';
    import axios from 'axios';

    export default {
        name: 'Create',
        components: {
            mdbRow,
            mdbCol,
            mdbCard,
            mdbInput,
            mdbBtn,
            mdbCardBody,
            mdbIcon
        },
        data() {
            return {
                cities: [],
                carDealer: {
                    name: null,
                    description: null,
                    location: null,
                    city_id: null
                },
                errors: []
            };
        },
        methods: {
            create( event ) {
                const params = this.carDealer;

                // this.clean();
                this.cleanErrors();

                axios.post( 'http://127.0.0.1:8000/api/car-dealers', params )
                    .then( res => {
                        console.log( res );
                        alert( 'creado' );
                    } )
                    .catch(
                        err => {
                            let res = err.response;

                            if ( res.status === 422 ) {

                                event.target.classList.add('was-validated');

                                this.setErrors( res.data.errors );
                            }
                        }
                    );
            },
            clean() {
                this.carDealer = {
                    name: null,
                    description: null,
                    location: null,
                    city_id: null
                };
            },
            setErrors( errors ) {

                Object.keys( errors ).forEach( index => {

                    errors[ index ] = errors[ index ][ 0 ];

                } );

                this.errors = errors;
            },
            cleanErrors() {
                this.errors = [];
            }
        },
        mounted(){
            axios.get( 'http://127.0.0.1:8000/api/cities' )
                .then( response => response.data )
                .then( apiResponse => {
                    let data = apiResponse.data;
                    data.map( entry => this.cities.push( entry ) );
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
