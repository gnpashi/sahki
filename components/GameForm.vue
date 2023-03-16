<template>
    <form class="box" @submit.prevent="submit">
         <div class="field">
             <label class="label" for="name">שם:</label>
             <div class="control">
                 <input class="input" type="text" name="name" v-model="name">
             </div>
         </div>
         <div class="field">
             <label class="label" for="description">תיאור:</label>
             <div class="control">
                 <textarea class="textarea" name="description" v-model="description"></textarea>
             </div>
         </div>
         <div class="field">
             <label class="label" for="tags">תגיות מופרדות בפסיק:</label>
             <div class="control">
                 <textarea class="textarea" placeholder="בחוץ, 5 דקות, בישיבה" name="tags" v-model="tags"></textarea>
             </div>
         </div>
             
         <div class="field">
             <div class="control">
                 <button class="button is-primary" type="submit">Submit</button>
             </div>
         </div>
     </form>
 </template>

<script>
import { collection, setDoc, doc } from "firebase/firestore"; 

export default {
    name: 'GameForm',
    props: {
        game: {
            type: Object,
            default: () => ({
                name: '',
                description: '',
                tags: []
            })
        }
    },
    data () {
        return {
            name: this.game.name,
            description: this.game.description,
            tags: this.game.tags.join(', ')

        }
    },
    created () {
        console.log(this.game);
        this.name = this.game.name
        this.description = this.game.description
        this.tags = this.game.tags.join(', ')
    },
    methods: {
        async submit () {
            console.log('submitted');
            const db = useFirestore()
            await setDoc(doc(db, "games", this.$route.params.id), {
                name: this.name,
                description: this.description,
                tags: this.tags.split(',')
                });
            console.log("Document written with ID: ", this.$route.params.id);  
            navigateTo('/games/' + this.$route.params.id)
        }
    }
}
</script>

<style>

</style>