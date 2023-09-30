import { createApp } from 'vue';
import router from "@/router/router.js";
import './style.css';
import components from '@/components/UI';
import App from './App.vue';

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component)
})

// icons.forEach(icon => {
//   app.component(icon.name, icon)
// })

app
  .use(router)
  .mount('#app')
