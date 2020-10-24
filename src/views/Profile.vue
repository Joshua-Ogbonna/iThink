<template>
    <div class="container mt-4">
        <ul class="list-group">
            <li class="list-group-item">Name: {{user.name}} </li>
            <li class="list-group-item mt-2">Email Address: {{user.email}}</li>
            
        </ul>
    </div>
</template>

<script>
/* eslint-disable */
// import Dashboard from '@/components/dashboard'
import { mapActions, mapGetters } from 'vuex'
    export default {
        components: {
            // Dashboard,
        },
        computed: {
            ...mapGetters(['user'])
        },
        methods: {
            ...mapActions(['getUser'])
        },
        created () {
            this.getUser();
        },
    }
</script>

<style scoped>

</style>