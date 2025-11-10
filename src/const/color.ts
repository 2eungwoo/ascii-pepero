// ascii console log color info : https://hyotwo.tistory.com/154

/*
    색깔 상수
*/
export const RESET_COLOR = "\x1b[0m"; // 색깔 초기화
export const STICK_PART_COLOR = "\x1b[38;5;130m"; // 과자부분 색깔

export const FLAVORS_COLOR = [ // 초코부분 색깔
    {
        name: "BASE",
        code: "\x1b[38;5;94m"
    },
    {
        name: "STRAWBERRY",
        code: "\x1b[38;5;211m"
    },
    {
        name: "MINT",
        code: "\x1b[38;5;122m"
    },
    {
        name: "WHITE",
        code: "\x1b[38;5;255m"
    }
];
