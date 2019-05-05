export class Questions {
  questions: Question[];
}
export class Question {
  question: string;
  type: string;
  min: number;
  max: number;
  variants: Variant[];
}

export class Variant {
  text: string;
}
