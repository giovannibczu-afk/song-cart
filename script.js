const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

let isPlaying = false;

// Play Song
function playSong() {
  isPlaying = true;
  playBtn.innerText = '⏸';
  audio.play();
}

// Pause Song
function pauseSong() {
  isPlaying = false;
  playBtn.innerText = '▶';
  audio.pause();
}

// Toggle Play / Pause
playBtn.addEventListener('click', () => {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Update Progress Bar & Time
audio.addEventListener('timeupdate', (e) => {
  const { duration, currentTime } = e.srcElement;
  if (isNaN(duration)) return;

  // Percentage for Progress Bar
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  // Calculate Current Time
  const currentMinutes = Math.floor(currentTime / 60);
  let currentSeconds = Math.floor(currentTime % 60);
  if (currentSeconds < 10) currentSeconds = `0${currentSeconds}`;
  currentTimeEl.innerText = `${currentMinutes}:${currentSeconds}`;

  // Calculate Duration
  const durationMinutes = Math.floor(duration / 60);
  let durationSeconds = Math.floor(duration % 60);
  if (durationSeconds < 10) durationSeconds = `0${durationSeconds}`;
  durationEl.innerText = `${durationMinutes}:${durationSeconds}`;
});
