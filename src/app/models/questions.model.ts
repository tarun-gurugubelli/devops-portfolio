export interface QuestionItem {
  question: string;
  answer: string;
}

export interface QuestionCategory {
  category: string;
  items: QuestionItem[];
}

export interface QuestionsData {
  questions: QuestionCategory[];
}
