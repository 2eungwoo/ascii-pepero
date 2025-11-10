// https://en.wikipedia.org/wiki/ANSI_escape_code#Colors

export function clearScreen() {
    process.stdout.write("\u001b[H\u001b[2J"); // 커서 좌상단, 콘솔 전체 지우기
}

export function moveCursorUp(lines: number) {
    process.stdout.write(`\u001B[${lines}A`); // 커서 n줄 위로
    // 빼빼로 줄어들때마다 동물이랑 과자높이 고정시키면서 새로 clear -> render 하려면
    // 계속 바뀌는 line수만큼 커서 올려서 같은 자리에 새 프레임으로 덮어써줘야됨
}

export function padRight(faceAscii: string, colWidth: number) {
    const n = colWidth - faceAscii.length;
    return faceAscii + (n > 0 ? " ".repeat(n) : ""); // 간격 폭 공백만큼 채워서 고정시킴 요소있으면 그걸로 채움
}

export function center(animalName: string, colWidth: number) {
    const n = colWidth - animalName.length;
    const L = Math.floor(n / 2);
    const R = n - L;
    return " ".repeat(Math.max(0, L)) + animalName + " ".repeat(Math.max(0, R));
    // 가운데 정렬 용
    // L/R 공백 분리해서 맞춤
}
