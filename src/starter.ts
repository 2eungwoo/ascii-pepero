import { FRAME_MS, TOTAL_LINES } from "./const";
import { Pepero } from "./models/pepero";
import { AnimalRenderer } from "./render/animal-renderer";
import { FooterRenderer } from "./render/footer-renderer";
import { HeaderRenderer } from "./render/header-renderer";
import { PeperoRenderer } from "./render/pepero-renderer";
import { clearScreen, moveCursorUp } from "./utils/terminal";

export class Starter {
  private readonly pepero = new Pepero();
  private readonly animalRenderer = new AnimalRenderer();
  private readonly peperoRenderer = new PeperoRenderer();
  private readonly headerRenderer = new HeaderRenderer();
  private readonly footerRenderer = new FooterRenderer();
  private timer?: NodeJS.Timeout;

  init() {
    clearScreen();
  }

  start() {
    this.init();
    this.timer = setInterval(() => this.renderFrame(), FRAME_MS);
  }

  stop() {
    if (this.timer) clearInterval(this.timer);
  }

  private renderFrame() {
    moveCursorUp(TOTAL_LINES);
    this.headerRenderer.printHeader();
    this.animalRenderer.renderAnimal();
    this.peperoRenderer.render(this.pepero.chocoLen, this.pepero.flavor.code);
    this.pepero.eat();
    this.footerRenderer.printFooter();
  }
}
