
async function getLatestEvents(username, numEvents) {
    const response = await fetch(`https://api.github.com/users/${username}/events`);
    const events = await response.json();
    const latestEvents = events.slice(0, numEvents);
    return latestEvents;
  }
  
  export { getLatestEvents };
  