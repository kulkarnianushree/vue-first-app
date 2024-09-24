import { createApp } from 'vue';
import App from './App.vue';
import FamilyContact from './components/FamilyContact.vue';
const app = createApp(App)
app.component('family-contact',FamilyContact)
app.mount("#app")
