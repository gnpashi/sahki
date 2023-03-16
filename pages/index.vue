<template>
    <div>
        <h1>Home</h1>
        <p>My home page</p>
    </div>
</template>

<script>
import { useCollection, useFirestore, useDocument } from 'vuefire'
import { collection, doc, deleteDoc, query, where, limit } from 'firebase/firestore'
export default {

    mounted() {
        this.getGame()
    },

    methods: {
        getGame() {
            // const db = useFirestore()
            // const gamesRef =  useCollection(collection(db, 'games'))  
            // const random = Math.random();  
            // const queryRef = query(gamesRef, where("id", ">=", random), limit(1));
            // this.game = useDocument(queryRef)

        },

}
}
</script>

<style>

</style>