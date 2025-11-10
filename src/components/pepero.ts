import {
  CHOCO_PART_MAX,
  COL_W,
  MOUTH_X,
  PEPERO_BAR,
  PEPERO_GAP_BLANK,
  RESET_COLOR,
  STICK_PART_COLOR,
  STICK_PART_LEN,
} from "../const";
import { ANIMALS } from "../models/animal_face";
import { stripAnsi } from "../utils/strip-ansi";

export class PeperoRenderer {
  constructor(private readonly animals = ANIMALS) {}

  // 뺴뺴로 막대를 입 위치로 배치
  // left: 입 x좌표까지 공백
  // right: col_width에서 content.length 뺸 만큼 공백
  private align(content: string): string {
    const visible = stripAnsi(content); // 색상 ansi 코드 제거
    const left = " ".repeat(MOUTH_X);
    const right = " ".repeat(COL_W - MOUTH_X - visible.length);
    return left + content + right;
  }

  private draw(content: string, repeat: number) {
    const cell = this.align(content);
    const row = this.animals.map(() => cell).join("");
    for (let i = 0; i < repeat; i++) console.log(row);
  }

  render(chocoLen: number, flavorColor: string) {
    this.draw(flavorColor + PEPERO_BAR + RESET_COLOR, chocoLen);            // 초코부분
    this.draw(STICK_PART_COLOR + PEPERO_BAR + RESET_COLOR, STICK_PART_LEN); // 과자부분
    this.draw(PEPERO_GAP_BLANK, 1);                                         // tip부분 (고정)
    this.draw(PEPERO_GAP_BLANK, CHOCO_PART_MAX - chocoLen);                 // blank
    console.log("");
  }

  // 기존 Pepero 객체 사용 코드 호환용
  renderFrom(pepero: { chocoLen: number; flavor: { code: string } }) {
    this.render(pepero.chocoLen, pepero.flavor.code);
  }
}