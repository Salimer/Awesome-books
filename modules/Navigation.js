import { closeIcon, dropDownNav, viewBooksSection, addBookFormSection, newContactSection } from './Initialisations.js';


export const handleListNavClick = () => {
    viewBooksSection.classList.remove('hide');
    addBookFormSection.classList.add('hide');
    newContactSection.classList.add('hide');
    dropDownNav.classList.add('navigation-menu', 'hide');
    dropDownNav.classList.remove('popup');
    closeIcon.classList.add('hide');
};
  
export const handleAddNewNavClick = () => {
    viewBooksSection.classList.add('hide');
  addBookFormSection.classList.remove('hide');
  newContactSection.classList.add('hide');
  dropDownNav.classList.add('navigation-menu', 'hide');
  dropDownNav.classList.remove('popup');
  closeIcon.classList.add('hide');
}

  export const handleContactNavClick = () => {
    viewBooksSection.classList.add('hide');
  addBookFormSection.classList.add('hide');
  newContactSection.classList.remove('hide');
  dropDownNav.classList.add('navigation-menu', 'hide');
  dropDownNav.classList.remove('popup');
  closeIcon.classList.add('hide');
  }

  export const handleHamburgerClick = () => {
    dropDownNav.classList.remove('navigation-menu', 'hide');
  dropDownNav.classList.add('popup');
  closeIcon.classList.remove('hide');
  }

  export const handleCloseIconClick = () => {
    dropDownNav.classList.add('navigation-menu', 'hide');
  dropDownNav.classList.remove('popup');
  closeIcon.classList.add('hide');
  }