import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@georgy/home-page",
  app: () => System.import("@georgy/home-page"),
  activeWhen: ["/"],
});

start({ urlRerouteOnly: true });
