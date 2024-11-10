import { i18n } from '@helpers/i18n';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

const app = createApp(App);

app.use(i18n);
app.mount('#app');
