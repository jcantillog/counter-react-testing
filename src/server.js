import { createServer, Model, Factory } from "miragejs";

export default function makeServer({ environment = "test" } = {}) {
  const server = createServer({
    environment,
    models: {
      feature: Model,
    },
    factories: {
      feature: Factory.extend({
        type: "release",
        enabled: true,
        stale: false,
        strategies: [],
        variants: [],
      }),
    },
    seeds(server) {
      server.create("feature", {
        name: "TeacherPlanning",
      });
    },
    routes() {
      this.namespace = "api";
      this.get("/client/features", (schema) => ({
        features: schema.features.all().models,
        version: 1,
      }));
    },
  });

  return server;
}
