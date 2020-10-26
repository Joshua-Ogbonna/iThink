<template>
    <div>
        <h3>This is Diaries</h3>
        
        {{diaries}}
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
    export default {
        // Computed properties
        computed: {
            ...mapGetters(['diaries'])
        },

        // Methods
        methods: {
            ...mapActions(['getDiaries'])
        },

        // Created
        created () {
            this.getDiaries()
        },
    }
</script>

<style scoped>

</style>