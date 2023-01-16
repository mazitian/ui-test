import { createApp } from "vue";
import App from "./app.vue";

import mlyslui from "mlysl-ui";
const app = createApp(App);
app.use(mlyslui);

app.mount("#app");
