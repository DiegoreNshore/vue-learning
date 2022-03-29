import { createApp, h } from "vue";
import App from "./vue/App.vue";
import router from "./vue/router"

import './index.html'

const app = createApp({
  render: ()=>h(App)
});

app.use(router);
app.mount("#vue-app");