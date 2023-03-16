// Importo le funzioni di vue router
import { createRouter, createWebHistory } from 'vue-router';

// IMporto le pagine che voglio usare
import HomePage from '../pages/HomePage.vue';
import ContactPage from '../pages/ContactPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import ProjectDetailPage from '../pages/ProjectDetailPage.vue';


// Creiamo il router e definiamo le rotte
const router = createRouter({
    history: createWebHistory(),
    linkActiveClass:'active',
    linkExactActiveClass:'active',
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/contact', name: 'contact', component: ContactPage },
        { path: '/projects/:id', name: 'project-detail', component: ProjectDetailPage },

        // ? Sempre per ultima e non consente di modifcare l'ulr con altre cose
        // { path: '/:pathMatch(.*)*', redirect:'/' },
        // ! Oppure (con una pagina che abbiamo creato)
        { path: '/:pathMatch(.*)*', component: NotFoundPage },

    ]
});

export { router };