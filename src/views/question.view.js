'use strict';

/**
 * creates a `div` element that displays a question
 * each line in the provided array will be mirrored around the separator
 * @param {{}} question - an array of strings, each one will be mirrored around the separator on a new line
 * @return {HTMLDivElement} a PRE element with the rendered string content
 */

export const questionView = (question = {}) => {
  const quizContainer = document.querySelector('.quizContainer');
  quizContainer.classList.add('showQuiz');

  const questionHeader = document.createElement('h3');
  questionHeader.setAttribute('id', 'questionHeader');
  questionHeader.innerText = question.title;
  quizContainer.appendChild(questionHeader);

  const questionText = document.createElement('div');
  questionText.setAttribute('id', 'questionText');
  questionText.classList.add('question', 'm-5');
  questionText.innerText = question.text;
  quizContainer.appendChild(questionText);

  const answerButtons = document.createElement('div');
  answerButtons.setAttribute('id', 'answerButtons');
  answerButtons.classList.add('answerButtons', 'd-grid', 'gap-2', 'm-5');

  for (const key in question.answers) {
    const answerButton = document.createElement('button');
    answerButton.classList.add('btn', 'btn-primary', 'btn-lg', 'w-100');
    answerButton.setAttribute('data-key', key);
    answerButton.setAttribute('data-correct', question.correct);
    answerButton.innerText = question.answers[key];
    answerButtons.appendChild(answerButton);
  }
  quizContainer.appendChild(answerButtons);

  const realScoreText = document.createElement('div');
  realScoreText.setAttribute('id', 'realScoreText');
  realScoreText.classList.add('realScoreText');
  quizContainer.appendChild(realScoreText);

  //return quizContainer;
};

export const removeQuestion = () => {
  const questionHeader = document.querySelector('#questionHeader');
  const questionText = document.querySelector('#questionText');
  const answerButtons = document.querySelector('#answerButtons');
  const realScoreText = document.querySelector('#realScoreText');
  const quizFooter = document.querySelector('.quizFooter');
  questionHeader.remove();
  questionText.remove();
  answerButtons.remove();
  realScoreText.remove();
  quizFooter.remove();
};
