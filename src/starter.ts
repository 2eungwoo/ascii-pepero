import { FRAME_MS, TOTAL_LINES } from "./const";
import { Pepero } from "./models/pepero";
import { AnimalRenderer } from "./render/animal-renderer";
import { PeperoRenderer } from "./render/pepero-renderer";
import { clearScreen, moveCursorUp } from "./utils/terminal";

export class Starter {
  private readonly pepero = new Pepero();
  private readonly animalRenderer = new AnimalRenderer();
  private readonly peperoRenderer = new PeperoRenderer();
  private timer?: NodeJS.Timeout;

  init() {
    clearScreen();
    this.animalRenderer.renderAnimal();
    console.log();
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
    this.animalRenderer.renderAnimal();
    console.log();
    this.peperoRenderer.render(this.pepero.chocoLen, this.pepero.flavor.code);
    console.log("[ctrl/cmd + c] to save your pepero");
    moveCursorUp(1);
    this.pepero.eat();
  }
}
