import { QuestionType } from "../types/quiz_type";

export const QuizAPI = async (amount: number, level: string) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=9&difficulty=${level}`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((quiz: QuestionType) => {
    return {
      question: quiz.question,
      answer: quiz.correct_answer,
      options: quiz.incorrect_answers
        .concat(quiz.correct_answer)
        .sort(() => Math.random() - 0.5),
    };
  });
};
