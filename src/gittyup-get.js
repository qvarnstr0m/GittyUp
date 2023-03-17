const getLatestEvents = async (userName, numEvents) => {
  let response;
  try {
    response = await fetch(`https://api.github.com/users/${userName}/events`);
  } catch (error) {
    //console.log(error);
  }

  //check if there is an error
  if (response?.ok) {
    const events = await response.json();
    const latestEvents = events.slice(0, numEvents);
    return latestEvents;
  } else {
    //here show the error
    const eventsList = document.getElementById('loadingError');
    const h5 = document.createElement('h5');
    h5.innerHTML = `An Error Occurred. HTTP Response Code ${response?.status}`;
    eventsList.appendChild(h5);
    return [];
  }
};

export { getLatestEvents };
