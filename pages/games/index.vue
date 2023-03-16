<template>
    <div>
        <h1>Games</h1>
        <p>My games page</p>
        <ul>
            <li v-for="game in games" :key="game.id">
                <NuxtLink :to="`/games/${game.id}`">
                    {{ game.name }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script>
import { useCollection, useFirestore } from 'vuefire'
import { collection, doc, deleteDoc } from 'firebase/firestore'
export default {
    name: 'games',
    data() {
        return {
            games: []
        }
    },
    mounted() {
        this.getGames()
    },
    methods: {
        getGames() {
            const db = useFirestore()
            this.games = useCollection(collection(db, 'games'))
        },
        deleteGame(id) {
            const db = useFirestore()
            const gameRef = doc(db, 'games', id)
            deleteDoc(gameRef)
            this.$router.push(`/games`)
        }
    }
}
</script>

<style>

</style>