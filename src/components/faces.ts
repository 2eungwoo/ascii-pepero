import { CHOCO_PART_MAX, COL_W, STICK_PART_LEN } from "../const/const";
import { ANIMALS } from "../models/animal_face";
import { padRight, center } from "../utils/terminal";

export const FACE_LINE_COUNT = 3;
export const EXTRA_BLANK_LINES = 2;

export function getFixedFrameLines() {
    return FACE_LINE_COUNT + EXTRA_BLANK_LINES + 1;
}
export function getFrameHeaderLines() {
    return FACE_LINE_COUNT + 1;
}
export function getPeperoMaxLines() {
    return CHOCO_PART_MAX + STICK_PART_LEN + 2;
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
    lines[2] = " ".repeat(COL_W * ANIMALS.length);
    for(const l of lines) {
      console.log(l);
      // 각 라인 출력
    }
}


