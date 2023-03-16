// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    
    app: {
      
      head: {
        title: 'Sahki',
        htmlAttrs: {
          lang: 'he',
          dir: 'rtl'
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: '' }

        ],
        link: [
          { rel: 'stylesheet', 
          href: 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css' },
        ]
      }
    },
    modules: [
        // ... other modules
        'nuxt-vuefire',
      ],
    
      vuefire: {
        config: {
            apiKey: "AIzaSyA9_C6QT2CJeOct1-Frv8OZX2AoatZ3Rzs",
            authDomain: "sahki-156e3.firebaseapp.com",
            projectId: "sahki-156e3",
            storageBucket: "sahki-156e3.appspot.com",
            messagingSenderId: "677760676087",
            appId: "1:677760676087:web:f60188839689e5b552a3f2",
            measurementId: "G-BNHERJ546F"
        },
      },
})
