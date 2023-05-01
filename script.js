
// Import page navigation and page sections initialisations
import { hamburger, closeIcon, dropDownNav, listNav, addNewNav, contactNav, viewBooksSection, addBookFormSection, newContactSection } from './modules/Initialisations.js';

// List event listener
import { handleAddNewNavClick, handleCloseIconClick, handleContactNavClick, handleHamburgerClick, handleListNavClick } from './modules/Navigation.js';
listNav.addEventListener('click', handleListNavClick);

// New book event listener
addNewNav.addEventListener('click', handleAddNewNavClick);

// Contact section event listener
contactNav.addEventListener('click', handleContactNavClick);

// Hamburger event listener
hamburger.addEventListener('click', handleHamburgerClick);

// Close icon event listener
closeIcon.addEventListener('click', handleCloseIconClick);

/* Books list page --------------------------------*/
import BooksCollection from './modules/BooksManipulation/BooksCollection.js';
const booksCollection = new BooksCollection();
booksCollection.init();

/* Contact page ----------------------------------*/
const timeContact = document.querySelector('#time');
const now = new Date();
const options = {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
  timeZone: 'Europe/London', // Change to your desired timezone
};
const dateTime = now.toLocaleString('en-US', options);
timeContact.textContent = dateTime;

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