import { Animal } from "./animal";

const CAT: Animal = {
  name: "CAT",
  face: {
    ears: " /\\_/\\ ",
    eyes: "( o.o )",
  },
};

const TIGER: Animal = {
  name: "TIGER",
  face: {
    ears: " /\\_/\\ ",
    eyes: "( =.= )",
  },
};

const RABBIT: Animal = {
  name: "RABBIT",
  face: {
    ears: " (\\_/) ",
    eyes: "( •_• )",
  },
};

export const ANIMALS: Animal[] = [CAT, TIGER, RABBIT];
