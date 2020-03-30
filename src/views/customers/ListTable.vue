<template>
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
</template>

<script>
    import axios from 'axios';
    import {
        mdbIcon,
        mdbBtn,
        mdbBtnGroup,
        mdbTbl,
        mdbTblHead,
        mdbTblBody
    } from 'mdbvue';

    export default {
        name: 'ListTable',
        components: {
            mdbIcon,
            mdbBtn,
            mdbBtnGroup,
            mdbTbl,
            mdbTblHead,
            mdbTblBody
        },
        data() {
            return {
                customers: this.items
            };
        },
        props: [ 'items' ],
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
        }
    }
</script>