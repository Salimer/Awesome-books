import { hamburger, dropDownNav, listNav, addNewNav, contactNav } from './Initialisations.js';

export const setupDesktopNavigation = () => {
    // Query selector for mobile navigation
    if (window.matchMedia('(min-width: 768px)').matches) {
      hamburger.classList.add('hide');
      dropDownNav.classList.remove('hide');
  
      // List event listener
      listNav.addEventListener('click', () => {
        dropDownNav.classList.remove('hide');
      });
  
      // New book event listener
      addNewNav.addEventListener('click', () => {
        dropDownNav.classList.remove('hide');
      });
      // Contact section event listener
      contactNav.addEventListener('click', () => {
        dropDownNav.classList.remove('hide');
      });
    }
  }
  