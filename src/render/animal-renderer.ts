import { COL_W } from "../const";
import { ANIMALS } from "../models/face";
import { center, padRight } from "../utils/align";

export class AnimalRenderer {
  printHeader() {
    console.log("🍫 🍭 ASCII PEPERO DAY - !\n");
  }

  printNames() {
    let row = "";
    for (const a of ANIMALS) {
      row += center(a.name, COL_W);
    }
    // 각 동물 이름은 col_width 폭만큼 정렬 후 이어붙임
    console.log(row); // 가로 한 줄로 출력
  }

  printFaces() {
    const lines: string[] = ["", "", ""];
    for (const a of ANIMALS) {
      const f = a.face;
      lines[0] += padRight(f.ears, COL_W);
      lines[1] += padRight(f.eyes, COL_W);
      // 귀 귀 귀
      // 눈 눈 눈
      // 이렇게 출력시킬거임 폭은 col_width
    }
    lines[2] = " ".repeat(COL_W * ANIMALS.length);
    for (const l of lines) {
      console.log(l);
      // 각 라인 출력
    }
  }

  renderAnimal() {
    this.printHeader();
    this.printNames();
    this.printFaces();
  }
}
