
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
import { updateContactTime } from './modules/Contact.js';
document.addEventListener('DOMContentLoaded', () => {
  updateContactTime();
});


// Query selector for desktop navigation
import { setupDesktopNavigation } from './modules/DesktopNavigation.js';

// Call the function to set up the mobile navigation
setupDesktopNavigation();