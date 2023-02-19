import { getLatestEvents } from './gittyup-get.js';

getLatestEvents('qvarnstr0m').then(events => {
  const eventsList = document.getElementById('events');
  events.forEach(event => {
    const li = document.createElement('li');
    li.textContent = event.type;
    eventsList.appendChild(li);
  });
});
