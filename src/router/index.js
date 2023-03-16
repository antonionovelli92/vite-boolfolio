// Importo le funzioni di vue router
import { createRouter, createWebHistory } from 'vue-router';

// IMporto le pagine che voglio usare
import HomePage from '../pages/HomePage.vue';
import ContactPage from '../pages/ContactPage.vue';


// Creiamo il router e definiamo le rotte
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/contact', name: 'contact', component: ContactPage },
    ]
});

export { router };