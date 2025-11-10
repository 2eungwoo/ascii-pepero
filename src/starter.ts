import { CHOCO_PART_MAX, FRAME_MS, STICK_PART_LEN } from "./const";
import { Pepero } from "./models/pepero";
import { AnimalRenderer } from "./render/animal-renderer";
import { PeperoRenderer } from "./render/pepero-renderer";
import { clearScreen, moveCursorUp } from "./utils/terminal";

export class Starter {
    private readonly pepero = new Pepero();
    private readonly animalRenderer = new AnimalRenderer();
    private readonly peperoRenderer = new PeperoRenderer();
    private timer?: NodeJS.Timeout;

    private readonly TOTAL_LINES = (3 + 1) + (2 * CHOCO_PART_MAX + STICK_PART_LEN);
    // face(2) + ear(1)  +  과자부분
    // faces(3) + spacer(1) + [choco_max + stick_len + tip(1) + blank_max + tail blank(1)]

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
        moveCursorUp(this.TOTAL_LINES);
        this.animalRenderer.renderAnimal();
        console.log();
        this.peperoRenderer.render(this.pepero.chocoLen, this.pepero.flavor.code);
        console.log("[ctrl/cmd + c] to save your pepero");
        moveCursorUp(1);
        this.pepero.eat();
    }
}
