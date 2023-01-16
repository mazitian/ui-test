import { createApp } from "vue";
import App from "./app.vue";
const app = createApp(App);
import mlyslui from "mlysl-ui";
app.use(mlyslui);

app.mount("#app");
