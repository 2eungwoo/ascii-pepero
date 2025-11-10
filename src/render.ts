import {
    RESET_COLOR,
    STICK_PART_COLOR,
    COL_W,
    MOUTH_X,
    CHOCO_PART_MAX,
    STICK_PART_LEN,
    PEPERO_GAP_BLANK,
    PEPERO_BAR,
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

const ANSI_REGEX = /\x1B\[[0-9;]*m/g;
// 뺴뺴로 막대를 입 위치로 배치
// left: 입 x좌표까지 공백
// right: col_width에서 content.length 뺸 만큼 공백
function alignAndMakeCell(content: string) {
    const visible = content.replace(ANSI_REGEX, "") // 색상 ansi 코드 제거
    const left = " ".repeat(MOUTH_X);
    const right = " ".repeat(COL_W - MOUTH_X - visible.length);
    return left + content + right;
}

function makePeperoPart(content: string, repeat: number) {
    const cell = alignAndMakeCell(content);
    for(let i=0; i<repeat; i++) {
     let row = "";
      for(const _ of ANIMALS) {
        row += cell;
      }
      console.log(row);
   }
}

export function renderPepero(choco_len:number, flavor_color:string) {
    // 초코부분
    makePeperoPart(flavor_color + PEPERO_BAR + RESET_COLOR, choco_len);

    // 과자부분
    makePeperoPart(STICK_PART_COLOR + PEPERO_BAR + RESET_COLOR, STICK_PART_LEN)

    // tip부분 (고정)
    makePeperoPart(PEPERO_GAP_BLANK, 1);

    // blank
    const blank_part = CHOCO_PART_MAX - choco_len;
    makePeperoPart(PEPERO_GAP_BLANK, blank_part);

    console.log("");
}