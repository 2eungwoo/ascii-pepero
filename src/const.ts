// ascii console log color info : https://hyotwo.tistory.com/154

export const RESET = "\x1b[0m"; // 색깔 초기화
export const STICK = "\x1b[38;5;130m"; // 과자부분 색깔

// 초코부분 색깔
export const FLAVORS = [
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
]

export const COL_W = 14;     // 동물끼리 간격
export const MOUTH_X = 3;    // 입 x좌표 -> 빼빼로 위치랑 세로간격 맞게 조정 중
export const CHOCO_MAX = 6;  // 초코부분 길이 -> init 길이임
export const STICK_LEN = 2;  // 과자부분 길이
export const FRAME_MS = 200; // 프레임 간격(ms)