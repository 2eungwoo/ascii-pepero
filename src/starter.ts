
import { FRAME_MS } from "./const";
import { Pepero } from "./models/pepero";
import { Renderer } from "./renderer";


export class Starter {
    private pepero = new Pepero();
    private renderer = new Renderer();
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
