import { successPercentage } from '../logic/passScore.logic.js';
export const scoreView = (quiz) => {
  const quizContainer = document.querySelector('.quizContainer');

  const questionHeader = document.createElement('h3');
  questionHeader.innerText = 'Summary';
  quizContainer.appendChild(questionHeader);

  const summaryText = document.createElement('div');
  summaryText.classList.add('question', 'm-5');
  summaryText.innerText =
    'Your score is ' +
    quiz.correct +
    '\n You answered ' +
    quiz.answered +
    ' questions';
  quizContainer.appendChild(summaryText);

  const passScore = successPercentage();
  const icon = document.createElement('i');

  if (quiz.correct > passScore) {
    icon.classList.add('fas', 'fa-check', 'checkIcon');
  } else {
    icon.classList.add('fas', 'fa-times', 'failedIcon');
  }
  quizContainer.appendChild(icon);

  document.querySelector('.helpButton').remove();
  document.querySelector('.cheatButton').remove();
};
