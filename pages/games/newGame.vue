<template>
    <div>
        <h1 class="title">משחק חדש</h1>
        <GameForm   />
    </div>

</template>

<script lang="ts">

// Add a new document in collection "cities"
export default {
    name: 'NewGame',
    data () {
        return {
            name: '',
            description: '',
            tags: []
        }
    },
    methods: {
        
    }
}
</script>

<style>

</style>