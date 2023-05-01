import { DateTime } from '../node_modules/luxon/src/luxon.js';

export const updateContactTime = () => {
    const timeContact = document.querySelector('#time');
    const now = DateTime.now().setZone('Europe/London');
    const dateTime = now.toLocaleString({
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    });
    timeContact.textContent = dateTime;
  }