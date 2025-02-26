const moodButtons = document.querySelectorAll('.mood-selector button');
const playlistContainer = document.getElementById('playlist');

const playlists = {
  happy: [
    { name: 'Happy Vibes', artist: 'Artist A', genre: 'Pop', audio: 'happy1.mp3' },
    { name: 'Joyful Days', artist: 'Artist B', genre: 'Dance', audio: 'happy2.mp3' },
    { name: 'Sunny Morning', artist: 'Artist C', genre: 'Pop', audio: 'happy3.mp3' }
  ],
  sad: [
    { name: 'Lonely Nights', artist: 'Artist D', genre: 'Ballad', audio: 'sad1.mp3' },
    { name: 'Tears in the Rain', artist: 'Artist E', genre: 'Indie', audio: 'sad2.mp3' },
    { name: 'Lost Love', artist: 'Artist F', genre: 'Alternative', audio: 'sad3.mp3' }
  ],
  energized: [
    { name: 'Thunderstorm', artist: 'Artist G', genre: 'Rock', audio: 'energetic1.mp3' },
    { name: 'High Voltage', artist: 'Artist H', genre: 'EDM', audio: 'energetic2.mp3' },
    { name: 'Adrenaline Rush', artist: 'Artist I', genre: 'Pop', audio: 'energetic3.mp3' }
  ],
  relaxed: [
    { name: 'Peaceful Waves', artist: 'Artist J', genre: 'Jazz', audio: 'relaxed1.mp3' },
    { name: 'Soothing Breeze', artist: 'Artist K', genre: 'Acoustic', audio: 'relaxed2.mp3' },
    { name: 'Calm Reflections', artist: 'Artist L', genre: 'Classical', audio: 'relaxed3.mp3' }
  ]
};

moodButtons.forEach(button => {
  button.addEventListener('click', () => {
    const mood = button.id;
    displayPlaylist(mood);
    changeBackground(mood);
  });
});

function displayPlaylist(mood) {
  const playlist = playlists[mood];
  playlistContainer.innerHTML = '';
  
  playlist.forEach(track => {
    const trackElement = document.createElement('div');
    trackElement.classList.add('track');
    trackElement.innerHTML = `
      <div>
        <h3>${track.name}</h3>
        <p>Artist: ${track.artist}</p>
        <p>Genre: ${track.genre}</p>
      </div>
      <audio controls>
        <source src="${track.audio}" type="audio/mp3">
        Your browser does not support the audio element.
      </audio>
    `;
    playlistContainer.appendChild(trackElement);
  });
}

function changeBackground(mood) {
  const body = document.body;
  switch (mood) {
    case 'happy':
      body.style.backgroundColor = '#ffeb3b'; 
      break;
    case 'sad':
      body.style.backgroundColor = '#2196f3'; 
      break;
    case 'energized':
      body.style.backgroundColor = '#f44336'; 
      break;
    case 'relaxed':
      body.style.backgroundColor = '#4caf50'; 
      break;
  }
}
