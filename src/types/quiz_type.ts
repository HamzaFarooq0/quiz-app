import { FormEvent } from 'react'

export type QuestionType = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuizType = {
    question: string,
    answer: string,
    options: string[]
}

export type QuizQuestionCard = {
  que: string
  options: string[]
  callback: (e:FormEvent<EventTarget>, userAns:string) => void
  questionNr: number
} 
