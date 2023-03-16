<template>
    <div>
        <h1>Game</h1>
        <p>My game page</p>
        <div v-if="this.game" >
            <h2>{{ game.name }}</h2>
            <p>{{ game.description }}</p>
            <p>tags: {{ game.tags.join(", ") }} </p>
            <NuxtLink :to="`/games/${game.id}/edit`">
                Edit
            </NuxtLink>
            <button @click="deleteGame(game.id)">Delete</button>
        </div>
    </div>
</template>

<script>
import { useDocument } from 'vuefire'
import { doc, deleteDoc } from 'firebase/firestore'

export default {
    data () {
        return {
            game: {
                name: '',
                description: '',
                tags: []
            }
        }
    },
    mounted () {
        this.getGame()
    },
    methods: {
        getGame () {
            const db = useFirestore()
            this.game = useDocument(doc(db, 'games', this.$route.params.id))
            return this.game
        },
        deleteGame(id) {
            const db = useFirestore()
            const gameRef = doc(db, 'games', id)
            deleteDoc(gameRef)
            this.$router.push(`/games`)
        }
    }
    // const settings = useDocument(doc(db, 'settings', 'some_id'))

}
</script>

<style>

</style>