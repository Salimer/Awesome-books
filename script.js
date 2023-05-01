/* eslint-disable max-classes-per-file */
// Define page navigation
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('#close-icon');
const dropDownNav = document.querySelector('.navigation-menu');
const listNav = document.querySelector('#list-nav');
const addNewNav = document.querySelector('#add-new-nav');
const contactNav = document.querySelector('#contact-nav');
/* eslint-disable max-classes-per-file */

// Define page sections
const viewBooksSection = document.querySelector('.view-books');
const addBookFormSection = document.querySelector('.add-book-form');
const newContactSection = document.querySelector('.new-contact-info');

/* Add event listeners */
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