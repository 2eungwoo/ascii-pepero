import {
    RESET_COLOR,
    STICK_PART_COLOR,
    COL_W,
    MOUTH_X,
    CHOCO_PART_MAX,
    STICK_PART_LEN,
    PEPERO_GAP_BLANK,
    PEPERO_BAR,
  } from "../const/const";
  import { ANIMALS } from "../models/animal_face";
import { stripAnsi } from "../utils/strip-ansi";


  // 뺴뺴로 막대를 입 위치로 배치
  // left: 입 x좌표까지 공백
  // right: col_width에서 content.length 뺸 만큼 공백
  function alignAndMakeCell(content: string) {
    const visible = stripAnsi(content) // 색상 ansi 코드 제거
    const left = " ".repeat(MOUTH_X);
    const right = " ".repeat(COL_W - MOUTH_X - visible.length);
    return left + content + right;
  }

  function makePeperoPart(content: string, repeat: number) {
    const cell = alignAndMakeCell(content);
    for (let i = 0; i < repeat; i++) {
      let row = "";
      for (const _ of ANIMALS) {
        row += cell;
      }
      console.log(row);
    }
  }

  export function renderPepero(chocoLen:number, flavorColor:string) {
      // 초코부분
      makePeperoPart(flavorColor + PEPERO_BAR + RESET_COLOR, chocoLen);

      // 과자부분
      makePeperoPart(STICK_PART_COLOR + PEPERO_BAR + RESET_COLOR, STICK_PART_LEN)

      // tip부분 (고정)
      makePeperoPart(PEPERO_GAP_BLANK, 1);

      // blank
      const blank_part = CHOCO_PART_MAX - chocoLen;
      makePeperoPart(PEPERO_GAP_BLANK, blank_part);

      console.log("");
  }
