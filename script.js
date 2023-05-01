
// Import page navigation and page sections initialisations
import { hamburger, closeIcon, dropDownNav, listNav, addNewNav, contactNav, viewBooksSection, addBookFormSection, newContactSection } from './modules/Initialisations.js';

// List event listener
listNav.addEventListener('click', () => {
  viewBooksSection.classList.remove('hide');
  addBookFormSection.classList.add('hide');
  newContactSection.classList.add('hide');
  dropDownNav.classList.add('navigation-menu', 'hide');
  dropDownNav.classList.remove('popup');
  closeIcon.classList.add('hide');
});

// New book event listener
addNewNav.addEventListener('click', () => {
  viewBooksSection.classList.add('hide');
  addBookFormSection.classList.remove('hide');
  newContactSection.classList.add('hide');
  dropDownNav.classList.add('navigation-menu', 'hide');
  dropDownNav.classList.remove('popup');
  closeIcon.classList.add('hide');
});

// Contact section event listener
contactNav.addEventListener('click', () => {
  viewBooksSection.classList.add('hide');
  addBookFormSection.classList.add('hide');
  newContactSection.classList.remove('hide');
  dropDownNav.classList.add('navigation-menu', 'hide');
  dropDownNav.classList.remove('popup');
  closeIcon.classList.add('hide');
});

// Hamburger event listener
hamburger.addEventListener('click', () => {
  dropDownNav.classList.remove('navigation-menu', 'hide');
  dropDownNav.classList.add('popup');
  closeIcon.classList.remove('hide');
});

// Close icon event listener
closeIcon.addEventListener('click', () => {
  dropDownNav.classList.add('navigation-menu', 'hide');
  dropDownNav.classList.remove('popup');
  closeIcon.classList.add('hide');
});

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