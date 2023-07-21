// Sample video URLs
const videoUrls = [
    "./media/1_sekou.mp4",
    "./media/2_naim.mp4",
    "./media/3_juliette.mp4"
  ];
  
  //Set up the playlist div by populating the li element by the video URLs
  const playlist = document.getElementById("playlist");
  for (let i = 0; i < videoUrls.length; i++) {
    
    const li = document.createElement("li");
    li.textContent = videoUrls[i];
    playlist.appendChild(li);
  }
  
  //Hide the playlist div
  playlist.style.display = "none";
  
  //Function to update the playlist div to show the currently playing video
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
  
  // Set up the video player
  
  //Toggle the playlist div via the showHidePlaylistBtn and change the icon of the button to show the current state
  function togglePlaylist() {
    if (playlist.style.display == "none") {
      playlist.style.display = "block";
      showHidePlaylistIcon.src = "./media/showPlaylistBtn.png";
    } else {
      playlist.style.display = "none";
      showHidePlaylistIcon.src = "./media/hidePlaylistBtn.png";
    }
  }
  
  let currentIndex = 0;
  const videoPlayer = document.getElementById("videoPlayer");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const playPauseIcon = document.getElementById("playPauseIcon");
  const muteUnmuteBtn = document.getElementById("muteUnmuteBtn");
  const muteUnmuteIcon = document.getElementById("muteUnmuteIcon");
  const showHidePlaylistBtn = document.getElementById("showHidePlaylistBtn");
  const showHidePlaylistIcon = document.getElementById("showHidePlaylistIcon");
  const fullscreenVideo = document.getElementById("fullscreenVideo");
  const videoPlayer2 = document.getElementById("videoPlayer2");
  const ARviewport = document.getElementById("ARviewport");
  const fullscreenBtn = document.getElementById("fullscreenBtn");
  
  let lastPlaybackPosition = 0;
  const marker = document.querySelector("a-marker");
    let isPlaying = false;
    let markerVisible = false;
    let isMuted = false;
  
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
  
  function autoPause() {
    if (markerVisible) {
      pauseVideo();
    } else {
      playVideo();
    }
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
  

  //Function to hide the div of id "ARviewport" and unhide the div of id "fullscreenVideo" when the button of id "fullscreenBtn" is clicked and puts the video of id "videPlayer2" in fullscreen mode
  function openFullscreen() {
ARviewport.style.display = "none";
fullscreenVideo.style.display = "block";
videoPlayer2.requestFullscreen();
//Change the src of the video element of id "videoPlayer2" to the video URL of the currently playing video
videoPlayer2.src = videoUrls[currentIndex];
videoPlayer2.currentTime = videoPlayer.currentTime;
videoPlayer.pause();
videoPlayer2.play();
//Hide the video player controls of id "videoPlayer2"



  }

  // Add event listeners for buttons
  document.getElementById("nextBtn").addEventListener("click", nextVideo);
  document.getElementById("previousBtn").addEventListener("click", previousVideo);
  playPauseBtn.addEventListener("click", togglePlayPause);
  muteUnmuteBtn.addEventListener("click", toggleMuteUnmute);
  showHidePlaylistBtn.addEventListener("click", togglePlaylist);
  fullscreenBtn.addEventListener("click", openFullscreen);
  
  //When videoPlayer2 exits fullscreen mode, hide the div of id "fullscreenVideo" and unhide the div of id "ARviewport" and resume playing the video of id "videoPlayer"
  videoPlayer2.addEventListener("fullscreenchange", function() {
    if (!document.fullscreenElement) {
      fullscreenVideo.style.display = "none";
      ARviewport.style.display = "block";
      videoPlayer2.pause();
      videoPlayer.play();
    }
  });
  
  
  
  // Start playing the first video in the playlist
  pauseVideo();