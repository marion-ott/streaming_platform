const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.player__progress');
const progressBar = player.querySelector('.player__progressFilled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const range = player.querySelector('.player__slider');

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ? '▶︎' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = percent + '%';
}

function resetProgress() {
  progressBar.style.flexBasis = '0%';
}

function resetProgress() {
  progressBar.style.flexBasis = '0%';
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
document.addEventListener('keydown', function(event) {
  if(event.keyCode === 32) {
    event.preventDefault();
    togglePlay();
  }
});
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
for (i = 0; i < skipButtons.length; i++) {
  skipButtons[i].addEventListener('click', skip);
}
range.addEventListener('change', handleRangeUpdate);
range.addEventListener('mousemove', handleRangeUpdate);

progress.addEventListener('click', scrub);
