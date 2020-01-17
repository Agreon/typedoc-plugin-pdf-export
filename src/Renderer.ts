import * as path from "path";
import { Component } from "typedoc/dist/lib/utils";
import { ContextAwareRendererComponent } from "typedoc/dist/lib/output/components";
import { PageEvent } from "typedoc/dist/lib/output/events";
const puppeteer = require("puppeteer");

@Component({ name: "pdf" })
export class Renderer extends ContextAwareRendererComponent {
  initialize() {
    super.initialize();

    this.application.options.setValue("theme", path.join(__dirname, "theme"));

    this.listenTo(this.application.renderer, {
      [PageEvent.END]: this.onPageEnd
    });
  }

  onPageEnd(page: PageEvent) {
    if (page.filename.match(/index.html/)) {
      (async () => {
        const browser = await puppeteer.launch();
        const puppet = await browser.newPage();
        await puppet.setContent(page.contents);
        await puppet.pdf({
          path: "export.pdf",
          format: "A4",
          printBackground: true,
          margin: {
            top: "0.75in",
            left: "0.75in",
            right: "0.52in",
            bottom: "1.44in"
          }
        });

        await browser.close();
      })();
    }
  }
}
