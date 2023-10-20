const App = {
  data() {
    return {
      servers: [],
    };
  },
  methods: {
    async createServer() {
      const data = {
        name: this.name,
        status: "created",
      };

      const res = await fetch("/api/server", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      this.name = "";
      const newServer = await res.json();
      console.log(newServer);
    },
  },
  async mounted() {
    const res = await fetch("/api/server");
    const data = await res.json();
    this.servers = data;
  },
};

Vue.createApp(App).mount("#app");
