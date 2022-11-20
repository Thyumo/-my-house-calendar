import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import './style.css'
import { apolloClient } from "./realm/ApolloClient";
import App from './App.vue'

createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App)
}).mount('#app')
