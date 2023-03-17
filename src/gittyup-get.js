
const getLatestEvents = async (username, numEvents) => {
    let data = { events: null, error: null }
    try {
        const response = await fetch(`https://api.github.com/users/${username}/events`);
        // hadling errors here
        if (response.status === 404) {
            throw new Error('username Not Found!')
        }

        const events = await response.json();
        const latestEvents = events.slice(0, numEvents);
        data.events = latestEvents;
    } catch (err) {
        data.error = err;
    }
    return data;
}

export { getLatestEvents };

