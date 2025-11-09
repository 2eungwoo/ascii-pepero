export interface Animal {
    name: string;
    face: AnimalFace;
}

// 일단 귀랑 눈만 해야 귀여운 듯
export interface AnimalFace {
    ears: string;
    eyes: string;
}