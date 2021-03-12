import { quizData } from '../data.js';
import { updateRealScore } from '../handlers/realScore.handler.js';

export const selectingHandler = (event) => {
  const answerButtons = document.querySelectorAll('.answerButtons button');

  for (let i = 0; i < answerButtons.length; i++) {
    if (
      answerButtons[i].getAttribute('data-key') ===
      answerButtons[i].getAttribute('data-correct')
    ) {
      answerButtons[i].classList.add('btn-success');
    } else {
      answerButtons[i].classList.add('btn-danger');
    }

    answerButtons[i].disabled = true;
  }

  if (
    event.target.getAttribute('data-key') ===
    event.target.getAttribute('data-correct')
  ) {
    event.target.innerHTML += `<span class="blink_icon"><i class="fa fa-thumbs-up"></i></span>`;
    quizData.quiz.correct++;
  } else if (
    event.target.getAttribute('data-key') !==
    event.target.getAttribute('data-correct')
  ) {
    event.target.innerHTML += `<span class="blink_icon"><i class="fa fa-thumbs-down"></i></span>`;
    quizData.quiz.wrong++;
  }
  quizData.quiz.answered++;
  updateRealScore();
};
export const pressedButton = (event) => {
  event.target.style = ' box-shadow: #607d8bb3 0px 0px 15px 3px;;';
};
