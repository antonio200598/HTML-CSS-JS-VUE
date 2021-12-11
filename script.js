const app = {
  mounted() {
    const clients = localStorage.getItem("clients");

    if (!clients) return;

    this.clients = JSON.parse(clients);
  },

  data() {
    return {
      services: [
        {
          id: 1,
          type: "processamento",
          price: 1,
          product: "1 micro",
        },
        {
          id: 2,
          type: "processamento",
          price: 2,
          product: "1 médio",
        },
        {
          id: 3,
          type: "processamento",
          price: 10,
          product: "1 grande",
        },
        {
          id: 4,
          type: "armazenamento",
          price: 0.5,
          product: "10 GB HD",
        },
        {
          id: 5,
          type: "armazenamento",
          price: 1,
          product: "10 TB HD",
        },
        {
          id: 6,
          type: "armazenamento",
          price: 5,
          product: "100 GB SSD",
        },
      ],

      form: {
        name: "",
        email: "",
        age: "",
        services: [],
      },

      clients: [],
    };
  },

  methods: {
    getServiceLabel(service) {
      return `${service.id} - ${service.type} - ${
        service.product
      } - $ ${service.price.toFixed(2)} por hora`;
    },

    getServicesIds(services) {
      return services.map((service) => service.id).join(", ");
    },

    addService(service) {
      this.form.services.push(service);
    },

    getTotal(services) {
      const total = services.reduce((total, service) => {
        return total + service.price;
      }, 0);

      return `$ ${total.toFixed(2)} por hora`;
    },

    handleSubmit(event) {
      event.preventDefault();
      this.clients.push(this.form);

      window.localStorage.setItem(
        "clients",
        JSON.stringify(this.clients, null, 2)
      );
    },
  },
};

Vue.createApp(app).mount("#app");
