<template>
    <div class="container mt-4">
        <ul class="list-group">
            <li class="list-group-item">Name: {{user.name}} </li>
            <li class="list-group-item mt-2">Email Address: {{user.email}}</li>
            
        </ul>
        <Diaries />
    </div>
</template>

<script>
/* eslint-disable */
import Diaries from '@/components/diaries'
import { mapActions, mapGetters } from 'vuex'
    export default {
        components: {
            Diaries,
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