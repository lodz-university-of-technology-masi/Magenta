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
export class Solutions {
  solutions: TestSolutionWithId[];
}
export class TestSolution {
  testId: number;
  answers: TestAnswer[];
}

export class TestSolutionWithId {
  id: number;
  checked: boolean;
  score: number;
  test: TestSolutionTest;
  user: TestSolutionUser;
  answers: TestAnswer[];
}
export class TestSolutionTest {
  id: number;
  language: string;
  name: string;
}
export class TestSolutionUser {
  id: number;
  username: string;
}
export class TestAnswer {
  answer: string;
  question: string;
}
