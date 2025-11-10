import { FRAME_MS } from "../const";
import { Pepero } from "./pepero";
import { PeperoRenderer } from "./pepero-renderer";

export class PeperoStarter {
    private pepero = new Pepero();
    private renderer = new PeperoRenderer();
    private timer?: NodeJS.Timeout;

    start() {
        this.renderer.init();

        this.timer = setInterval(() => {
            this.render();
        }, FRAME_MS)
    }

    stop() {
        if(this.timer) {
            clearInterval(this.timer);
        }
    }

    render() {
        this.renderer.renderFrame(this.pepero);
        this.pepero.eat();
    }
}