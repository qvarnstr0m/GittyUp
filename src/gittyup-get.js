
async function getLatestEvents(username, numEvents) {
    const response = await fetch(`https://api.github.com/users/${username}/events`);
    const events = await response.json();
    const latestEvents = events.slice(0, numEvents); // Change the number to get more or fewer events
    return latestEvents;
  }
  
  export { getLatestEvents };
  