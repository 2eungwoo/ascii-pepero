import { CHOCO_PART_MAX, FLAVORS_COLOR } from "../const";

export class Pepero {
    chocoLen = CHOCO_PART_MAX;
    flavorIdx = 0;

    get flavor() {
        return FLAVORS_COLOR[this.flavorIdx % FLAVORS_COLOR.length]!;
        // 0 % n은 0이고 n>0이라 undefined 절대 안나옴
    }

    eat() {
        this.chocoLen--;
        if(this.chocoLen <= 0) {
            this.chocoLen = CHOCO_PART_MAX;
            this.flavorIdx = (this.flavorIdx + 1) % FLAVORS_COLOR.length;
            // 다먹으면 다시 max길이로 채우고 다음 맛
        }
    }
}
