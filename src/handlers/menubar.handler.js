// // #region Full screen Overlay Navigation
// //reference https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp
// //show overlay menu bar from left to right with animation
// function openNav() {}
// //hide overlay menu bar from right to left with animation
// function closeNav() {}
// function toggleBox() {
//   // toggle between classes => show or hidden with fade effect
//   document.querySelector('.navbar-btn-box').classList.toggle('change');
// }
// // #end region

export const openNavbar = (event) => {
  const icon = event.target;
  const aTag = icon.closest('a');
  if (aTag.id === 'menuBtn') {
    document.getElementById('overlay_navbar').style.width = '100%';
    document.getElementById('help_navbar').style.height = '0%';
    document.getElementById('cheat_navbar').style.height = '0%';
  }
  if (aTag.id === 'helpBtn') {
    document.getElementById('help_navbar').style.height = '70%';
    document.getElementById('cheat_navbar').style.height = '0%';
  }
  if (aTag.id === 'cheatBtn') {
    document.getElementById('cheat_navbar').style.height = '70%';
    document.getElementById('help_navbar').style.height = '0%';
  }
};
export const closeNavbar = (event) => {
  if (event.target.id === 'closeBtn') {
    document.getElementById('overlay_navbar').style.width = '0%';
  }
  if (event.target.id === 'help_closeBtn') {
    document.getElementById('help_navbar').style.height = '0%';
  }
  if (event.target.id === 'cheat_closeBtn') {
    document.getElementById('cheat_navbar').style.height = '0%';
  }
};
