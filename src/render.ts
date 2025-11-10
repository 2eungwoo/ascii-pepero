import {
    RESET,
    STICK,
    COL_W,
    MOUTH_X,
    CHOCO_MAX,
    STICK_LEN,
} from "./const";
import { ANIMALS } from "./models/animal_face";
import { padRight, center } from "./utils";

export function printHeader() {
    console.log("🍫🍭 ASCII PEPERO DAY - !\n");
}

export function printNames() {
    let row = "";
    for(const a of ANIMALS) {
      row += center(a.name, COL_W); 
    }
    // 각 동물 이름은 col_width 폭만큼 정렬 후 이어붙임
    console.log(row); // 가로 한 줄로 출력
}

export function printFaces() {
    const lines: string[] = ["", "", ""];
    for(const a of ANIMALS) {
      const f = a.face;
      lines[0] += padRight(f.ears, COL_W);
      lines[1] += padRight(f.eyes, COL_W);
      // 귀 귀 귀
      // 눈 눈 눈
      // 이렇게 출력시킬거임 폭은 col_width
    }
    for(const l of lines) {
      console.log(l);
      // 각 라인 출력
    }
}

function makePeperoCell(content: string) { // 빼뺴로 위치 입에 오게 만들기
  const left = " ".repeat(MOUTH_X);
  const right = " ".repeat(COL_W - MOUTH_X - 2); // -2는 호출부의 "||".length임
  return left + content + right;
  // left: 입 x좌표 까지 공백
  // right: col_width에서 2만큼 뺌 (뺴뺴로가 || 이라서 2인데 이것도 param.length하는게 낫나)
}

export function printPepero(choco_len:number, flavor_color:string) {
  // 초코부분
  for(let i=0; i<choco_len; i++) {
    const choco_part = makePeperoCell(flavor_color + "||" + RESET);
    let row = "";
    for(const _ of ANIMALS) {
      row += choco_part;
    }
    console.log(row);
  }

  // 과자부분
  for(let i=0; i<STICK_LEN; i++) {
    const stick_part = makePeperoCell(STICK + "||" + RESET);
    let row = "";
    for(const _ of ANIMALS) {
      row += stick_part;
    }
    console.log(row);
  }

  // tip부분 자리 유지
  const tip_position = makePeperoCell("  ");
  let tipRow = "";
  for(const _ of ANIMALS) {
    tipRow += tip_position;
  }
  console.log(tipRow);

  // blank
  const blank_part = CHOCO_MAX - choco_len;
  for(let i=0; i<blank_part; i++) {
    const cell = makePeperoCell("  ");
    let cellRow = "";
    for(const _ of ANIMALS) {
      cellRow += cell;
    }
    console.log(cellRow);
  }
  
  console.log("");
}