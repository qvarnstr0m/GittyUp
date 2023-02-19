async function getLatestEvents(username) {
    const response = await fetch(`https://api.github.com/users/${username}/events`);
    const events = await response.json();
    const latestEvents = events.slice(0, 5); // Change the number to get more or fewer events
    return latestEvents;
  }
  
  export { getLatestEvents };
  