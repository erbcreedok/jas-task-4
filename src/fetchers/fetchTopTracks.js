const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
        'X-RapidAPI-Key': 'adc5082072msh0760dcdf7189792p184a37jsn7fbceb199f76'
    }
};

export function fetchTopTracks() {
    return fetch('https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
