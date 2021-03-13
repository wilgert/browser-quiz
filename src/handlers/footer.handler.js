import { quizData } from '../data.js';
import { updateQuiz } from './quiz.handler.js';
import { scoreView } from '../views/score.view.js';
import { updateRealScore } from '../handlers/realScore.handler.js';
import { removeQuestion } from '../views/question.view.js';
import { closeForLastPage } from '../handlers/menubar.handler.js';

export const nextButtonHandler = () => {
  removeQuestion();
  if (quizData.quiz.currentQuestion < quizData.questions.length) {
    quizData.quiz.currentQuestion++;
  }
  if (quizData.quiz.currentQuestion === quizData.questions.length) {
    scoreView(quizData.quiz);
    closeForLastPage();
  } else {
    updateQuiz(
      quizData.questions[quizData.quiz.currentQuestion],
      quizData.quiz.currentQuestion
    );
    updateRealScore();
  }
}

export const previousButtonHandler = () => {
  removeQuestion();
  if (quizData.quiz.currentQuestion >= 0) {
    quizData.quiz.currentQuestion--;
  }
  if (quizData.quiz.currentQuestion === -1) {
    updateQuiz(quizData.questions[0], 0);
    quizData.quiz.currentQuestion = 0;
  } else {
    updateQuiz(
      quizData.questions[quizData.quiz.currentQuestion],
      quizData.quiz.currentQuestion
    );
  }
  updateRealScore();
};
