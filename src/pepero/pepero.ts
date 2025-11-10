import { CHOCO_PART_MAX, FLAVORS_COLOR } from "../const";

export class Pepero {
    choco_len = CHOCO_PART_MAX;
    flavor_idx = 0;

    get flavor() {
        return FLAVORS_COLOR[this.flavor_idx % FLAVORS_COLOR.length]!;
        // 0 % n은 0이고 n>0이라 undefined 절대 안나옴
    }

    eat() {
        this.choco_len--;
        if(this.choco_len <= 0) {
            this.choco_len = CHOCO_PART_MAX;
            this.flavor_idx = (this.flavor_idx + 1) % FLAVORS_COLOR.length;
            // 다먹으면 다시 max길이로 채우고 다음 맛
        }
    }
}