import { CHOCO_PART_MAX, STICK_PART_LEN } from "./const/const";
import { printFaces } from "./components/faces";
import { printHeader } from "./components/header";
import { printNames } from "./components/faces";

import { clearScreen, moveCursorUp } from "./utils/terminal";
import { Pepero } from "./models/pepero";
import { renderPepero } from "./components/pepero";

export class Renderer {
    // 커서 올려야되는 라인 수
    // 이전 프레임 높이 만큼을 고정값으로 계속 올려줘야됨
    // 그래야 프레암마다 출력 라인 수가 매번동일하게 유지됨
    private readonly TOTAL_LINES = (3 + 1) + (2 * CHOCO_PART_MAX + STICK_PART_LEN);
    // face(2) + ear(1)  +  과자부분
    // faces(3) + spacer(1) + [choco_max + stick_len + tip(1) + blank_max + tail blank(1)]

    // (1) => tip자리, (5) =>얼굴3잘+아래공백1줄+마지막blanck 1줄

    init() {
        clearScreen();
        printHeader();
        printNames();
        printFaces();
        console.log();
    }

    renderFrame(p: Pepero) {
        moveCursorUp(this.TOTAL_LINES);
        printHeader();
        printNames();
        printFaces();
        console.log();

        renderPepero(p.chocoLen, p.flavor.code);
        // ts에서 get()도 이렇게 접근
        // js 컴파일된 모습이 get: function() {..} 이렇게 생김

        console.log("[ctrl/cmd + c] to save your pepero");
        moveCursorUp(1);

    }
}
