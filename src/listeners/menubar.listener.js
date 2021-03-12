('use strict');

import { openNavbar } from '../handlers/menubar.handler.js';
import { closeNavbar } from '../handlers/menubar.handler.js';

export const addMenuBarListener = () => {
  const menuBtn = document.querySelector('#menuBtn');
  menuBtn.addEventListener('click', openNavbar);
  const closeBtn = document.querySelector('#closeBtn');
  closeBtn.addEventListener('click', closeNavbar);

  const helpBtn = document.querySelector('#helpBtn');
  helpBtn.addEventListener('click', openNavbar);
  const helpCloseBtn = document.querySelector('#help_closeBtn');
  helpCloseBtn.addEventListener('click', closeNavbar);

  const cheatBtn = document.querySelector('#cheatBtn');
  cheatBtn.addEventListener('click', openNavbar);
  const cheatCloseBtn = document.querySelector('#cheat_closeBtn');
  cheatCloseBtn.addEventListener('click', closeNavbar);
};
