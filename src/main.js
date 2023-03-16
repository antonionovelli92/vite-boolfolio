import { createApp } from 'vue';
import { router } from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
// importo globalmente il mio loader(smonto anche il create app perchè deve avvenire prima del mount)
import AppLoader from './components/AppLoader.vue';

const app = createApp(App);


app.component('AppLoader', AppLoader);
app.use(router);
app.mount('#app');
