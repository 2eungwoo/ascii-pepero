// import {
//     FLAVORS_COLOR,
//     CHOCO_PART_MAX,
//     STICK_PART_LEN,
//     FRAME_MS,
//   } from "./const";
// import { clearScreen, moveCursorUp } from "./utils";
// import { printHeader, printNames, printFaces, renderPepero } from "./render";

import { PeperoStarter } from "./pepero/pepero-starter";

// function run () {
//     let choco_len = CHOCO_PART_MAX;
//     let flavor_idx = 0;

//     clearScreen();
//     printHeader();
//     printNames();
//     printFaces();
//     console.log();

//     const first_flavor = FLAVORS_COLOR[flavor_idx % FLAVORS_COLOR.length]!; // 0 % n은 0이고 n>0이라 undefined 절대 안나옴
//     renderPepero(choco_len, first_flavor.code);  // 첫 맛으로 시작

//     // 커서 올려야되는 라인 수
//     // 이전 프레임 높이 만큼을 고정값으로 계속 올려줘야됨
//     // 그래야 프레암마다 출력 라인 수가 매번동일하게 유지됨
//     const TOTAL_LINES = CHOCO_PART_MAX + STICK_PART_LEN + 1 + 5;  // (1) => tip자리, (5) =>얼굴3잘+아래공백1줄+마지막blanck 1줄

//     setInterval(() => {
//       moveCursorUp(TOTAL_LINES);
//       printFaces();
//       console.log();

//       const flavor = FLAVORS_COLOR[flavor_idx % FLAVORS_COLOR.length]!;
//       renderPepero(choco_len, flavor.code);

//       choco_len--;
//       if(choco_len <= 0) {
//           choco_len = CHOCO_PART_MAX;
//           flavor_idx = (flavor_idx + 1) % FLAVORS_COLOR.length;
//       }
//         console.log('[ctrl/cmd + c] to save your pepero');
//         moveCursorUp(1);
//   }, FRAME_MS);

// }

// run();

const starter = new PeperoStarter();
starter.start();