import { Application } from "typedoc/dist/lib/application";
import { Renderer } from "./Renderer";

module.exports = (PluginHost: Application) => {
  const app = PluginHost.owner;

  if (app.renderer.hasComponent("pdf")) {
    return;
  }

  app.renderer.addComponent("pdf", new Renderer(app.renderer));
};
