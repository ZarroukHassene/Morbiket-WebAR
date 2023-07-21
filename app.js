//Video player Buttons
const fullscreenBtn = document.getElementById("fullscreenBtn");
const playPauseBtn = document.getElementById("playPauseBtn");
const playPauseIcon = document.getElementById("playPauseIcon");
const muteUnmuteBtn = document.getElementById("muteUnmuteBtn");
const muteUnmuteIcon = document.getElementById("muteUnmuteIcon");
const showHidePlaylistBtn = document.getElementById("showHidePlaylistBtn");
const showHidePlaylistIcon = document.getElementById("showHidePlaylistIcon");
//Elements
const fullscreenVideo = document.getElementById("fullscreenVideo");
const videoPlayer = document.getElementById("videoPlayer");
const videoPlayer2 = document.getElementById("videoPlayer2");
const ARviewport = document.getElementById("ARviewport");
const marker = document.querySelector("a-marker");
const playlist = document.getElementById("playlist");
// Playlist array of video URLs
const videoUrls = [
  "./media/1_sekou.mp4",
  "./media/2_naim.mp4",
  "./media/3_juliette.mp4",
];
//Creating playlist overlay elements
for (let i = 0; i < videoUrls.length; i++) {
  const li = document.createElement("li");
  li.textContent = videoUrls[i];
  playlist.appendChild(li);
}

//Initial values
let currentIndex = 0;
let lastPlaybackPosition = 0;
let isPlaying = false;
let markerVisible = false;
let isMuted = false;


// Update playlist overlay when video changes
function updatePlaylist() {
  const li = playlist.getElementsByTagName("li");
  for (let i = 0; i < li.length; i++) {
    if (i == currentIndex) {
      li[i].style.fontStyle = "italic";
      li[i].style.fontSize = 1.3 + "em";
    } else {
      li[i].style.fontStyle = "normal";
      li[i].style.fontSize = 1 + "em";
    }
  }
}

function togglePlaylist() {
  if (playlist.style.display == "none") {
    playlist.style.display = "block";
    showHidePlaylistIcon.src = "./media/showPlaylistBtn.png";
  } else {
    playlist.style.display = "none";
    showHidePlaylistIcon.src = "./media/hidePlaylistBtn.png";
  }
}

function playVideo() {
  videoPlayer.src = videoUrls[currentIndex];
  videoPlayer.currentTime = lastPlaybackPosition;
  videoPlayer.play();
  playPauseIcon.src = "./media/pauseBtn.png";
  isPlaying = true;
}

function pauseVideo() {
  videoPlayer.pause();
  lastPlaybackPosition = videoPlayer.currentTime;
  playPauseIcon.src = "./media/playBtn.png";
  isPlaying = false;
}

function togglePlayPause() {
  if (videoPlayer.paused || videoPlayer.ended) {
    playVideo();
    isPlaying = true;
  } else {
    pauseVideo();
    isPlaying = false;
  }
}

function toggleMuteUnmute() {
  if (isMuted) {
    videoPlayer.muted = false;
    muteUnmuteIcon.src = "./media/unmutedBtn.png";
  } else {
    videoPlayer.muted = true;
    muteUnmuteIcon.src = "./media/mutedBtn.png";
  }
  isMuted = !isMuted;
}

function nextVideo() {
  currentIndex = (currentIndex + 1) % videoUrls.length;
  playVideo();
  isPlaying = true;
  updatePlaylist();
}

function previousVideo() {
  currentIndex = (currentIndex - 1 + videoUrls.length) % videoUrls.length;
  playVideo();
  isPlaying = true;
  updatePlaylist();
}

function openFullscreen() {
  ARviewport.style.display = "none";
  fullscreenVideo.style.display = "block";
  videoPlayer2.requestFullscreen();
  videoPlayer2.src = videoUrls[currentIndex];
  videoPlayer2.currentTime = videoPlayer.currentTime;
  videoPlayer.pause();
  videoPlayer2.play();
}

// AR marker visibility event listeners
marker.addEventListener("markerFound", () => {
  markerVisible = true;
  playVideo();
});
marker.addEventListener("markerLost", () => {
  markerVisible = false;
  pauseVideo();
});

// Video Player Controls event listeners
document.getElementById("nextBtn").addEventListener("click", nextVideo);
document.getElementById("previousBtn").addEventListener("click", previousVideo);
playPauseBtn.addEventListener("click", togglePlayPause);
muteUnmuteBtn.addEventListener("click", toggleMuteUnmute);
showHidePlaylistBtn.addEventListener("click", togglePlaylist);
fullscreenBtn.addEventListener("click", openFullscreen);

// Executes when exiting fullscreen mode to revert to AR mode
videoPlayer2.addEventListener("fullscreenchange", function () {
  if (!document.fullscreenElement) {
    fullscreenVideo.style.display = "none";
    ARviewport.style.display = "block";
    videoPlayer2.pause();
    videoPlayer.play();
  }
});

// Playlist overlay initially hidden
playlist.style.display = "none";
// Video starts paused until marker is visible
pauseVideo();
