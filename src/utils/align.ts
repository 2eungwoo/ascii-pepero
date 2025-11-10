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
