const getLatestEvents = async (userName, numEvents) => {
  let response;
  let loading = true;
  try {
    response = await fetch(`https://api.github.com/users/${userName}/events`);
    loading = false;
  } catch (error) {
    loading = false;
  }

  //loading
  if (loading) {
    const eventsList = document.getElementById('loadingError');
    const h5 = document.createElement('h5');
    h5.innerHTML = `loading...`;
    eventsList.appendChild(h5);
    return [];
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
