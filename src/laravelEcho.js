import Echo from "laravel-echo";

window.Pusher = require("pusher-js");

window.Echo = new Echo({
  broadcaster: "pusher",
  key: process.env.VUE_APP_PUSHER_APP_KEY,
  wsHost: process.env.VUE_APP_PUSHER_HOST,
  wsPort: process.env.VUE_APP_PUSHER_PORT,
  wssPort: process.env.VUE_APP_PUSHER_PORT,
  forceTLS: false,
  encrypted: true,
  disableStats: true,
  cluster: "mt1",
  enabledTransports: ["ws", "wss"],
});
