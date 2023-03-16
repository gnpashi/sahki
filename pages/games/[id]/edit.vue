<template>
    <div v-if="game">
    <h1>Edit Game</h1>
    <GameForm :game="game" />
  </div>
</template>

<script>
import { useDocument } from 'vuefire'
import { doc } from 'firebase/firestore'

export default {
    data () {
        return {
            game: null
        }
    },
    mounted () {
        this.getGame()
    },
    methods: {
        getGame () {
            const db = useFirestore()
            this.game = useDocument(doc(db, 'games', this.$route.params.id))
            console.log(this.game);
            return this.game
        },
    }
}
</script>

<style>

</style>