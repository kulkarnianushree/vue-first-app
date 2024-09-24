import { createApp } from 'vue';
import App from './App.vue';
import FamilyContact from './components/FamilyContact.vue';
import NewMember from './components/NewMember.vue';
const app = createApp(App)
app.component('family-contact',FamilyContact)
app.component('new-member',NewMember)
app.mount("#app")
