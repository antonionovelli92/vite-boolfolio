// Importo le funzioni di vue router
import { createRouter, createWebHistory } from 'vue-router';

// IMporto le pagine che voglio usare
import HomePage from '../pages/HomePage.vue';
import ContactPage from '../pages/ContactPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';


// Creiamo il router e definiamo le rotte
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/contact', name: 'contact', component: ContactPage },

        // ? Sempre per ultima e non consente di modifcare l'ulr con altre cose
        // { path: '/:pathMatch(.*)*', redirect:'/' },
        // ! Oppure (con una pagina che abbiamo creato)
        { path: '/:pathMatch(.*)*', component: NotFoundPage },

    ]
});

export { router };