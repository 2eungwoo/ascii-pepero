import {
    FLAVORS,
    CHOCO_MAX,
    STICK_LEN,
    FRAME_MS,
  } from "./const";
import { clearScreen, moveCursorUp } from "./utils";
import { printHeader, printNames, printFaces, printPepero } from "./render";

function run () {
    let choco_len = CHOCO_MAX;
    let flavor_idx = 0;

    clearScreen();
    printHeader();
    printNames();
    printFaces();
    console.log();

    const first_flavor = FLAVORS[flavor_idx % FLAVORS.length]!; // 0 % n은 0이고 n>0이라 undefined 절대 안나옴
    printPepero(choco_len, first_flavor.code);  // 첫 맛으로 시작

    // 커서 올려야되는 라인 수
    // 이전 프레임 높이 만큼을 고정값으로 계속 올려줘야됨
    // 그래야 프레암마다 출력 라인 수가 매번동일하게 유지됨
    const TOTAL_LINES = CHOCO_MAX + STICK_LEN + 1 + 5;  // (1) => tip자리, (5) =>얼굴3잘+아래공백1줄+마지막blanck 1줄

    setInterval(() => {
      moveCursorUp(TOTAL_LINES);
      printFaces();
      console.log();

      const flavor = FLAVORS[flavor_idx % FLAVORS.length]!;
      printPepero(choco_len, flavor.code);

      choco_len--;
      if(choco_len <= 0) {
          choco_len = CHOCO_MAX;
          flavor_idx = (flavor_idx + 1) % FLAVORS.length;
      }
        console.log('[ctrl/cmd + c] to save your pepero');
        moveCursorUp(1);
  }, FRAME_MS);

}

run();