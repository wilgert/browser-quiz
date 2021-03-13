'use strict';

import { previousButtonHandler, nextButtonHandler } from '../handlers/footer.handler.js';
export const addFooterListener = () => {
  const nextButton = document.querySelector('#nextButton');
  nextButton.addEventListener('click', nextButtonHandler);
  const prevButton = document.querySelector('#prevButton');
  prevButton.addEventListener('click', previousButtonHandler);
};
