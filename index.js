document.addEventListener("DOMContentLoaded", function () {
  const video1 = document.querySelector("#video1");
  const video2 = document.querySelector("#video2");
  const video3 = document.querySelector("#video3");
  const previousButton = document.getElementById("previousButton");
  const nextButton = document.getElementById("nextButton");
  const videoControls = document.querySelector(".videoControls");

  // const camera2 = document.getElementById("camera2");

  // camera2.setAttribute("look-controls", { enabled: false });

  function showVideoControls() {
    videoControls.style.display = "block";
  }

  function hideVideoControls() {
    videoControls.style.display = "none";
  }

  video1.load();
  video2.load();
  video3.load();

  const marker1 = document.getElementById("marker1");
  marker1.addEventListener("markerFound", function () {
    video1.play();
  });

  marker1.addEventListener("markerLost", function () {
    videoControls.style.display = "none";
    video1.pause();

    if (video1.src != "http://127.0.0.1:5500/assets/videos/1_sekou.mp4") {
      video1.setAttribute(
        "src",
        "http://127.0.0.1:5500/assets/videos/1_sekou.mp4"
      );
    }
  });

  const marker2 = document.getElementById("marker2");
  marker2.addEventListener("markerFound", function () {
    video2.play();
  });

  marker2.addEventListener("markerLost", function () {
    videoControls.style.display = "none";
    video2.pause();

    if (video2.src != "http://127.0.0.1:5500/assets/videos/2_naim.mp4") {
      video2.setAttribute(
        "src",
        "http://127.0.0.1:5500/assets/videos/2_naim.mp4"
      );
    }
  });

  const marker3 = document.getElementById("marker3");
  marker3.addEventListener("markerFound", function () {
    video3.play();
  });

  marker3.addEventListener("markerLost", function () {
    videoControls.style.display = "none";
    video3.pause();
    if (video3.src != "http://127.0.0.1:5500/assets/videos/3_juliette.mp4") {
      video3.setAttribute(
        "src",
        "http://127.0.0.1:5500/assets/videos/3_juliette.mp4"
      );
    }
  });

  //////////////////////////////

  // Add event listeners to the videos to show/hide controls
  video1.addEventListener("play", showVideoControls);
  video1.addEventListener("pause", hideVideoControls);
  video2.addEventListener("play", showVideoControls);
  video2.addEventListener("pause", hideVideoControls);
  video3.addEventListener("play", showVideoControls);
  video3.addEventListener("pause", hideVideoControls);

  // Add event listeners to the buttons
  previousButton.addEventListener("click", function () {
    if (!video1.paused) {
      let videoAsset = document.querySelector("#video1");
      console.log(videoAsset.src);
      video1.pause();
      video1.currentTime = 0;
      if (
        videoAsset.src === "http://127.0.0.1:5500/assets/videos/1_sekou.mp4"
      ) {
        console.log(videoAsset.src);
        videoAsset.setAttribute(
          "src",
          "http://127.0.0.1:5500/assets/videos/3_juliette.mp4"
        );
      } else if (
        videoAsset.src === "http://127.0.0.1:5500/assets/videos/3_juliette.mp4"
      ) {
        console.log(videoAsset.src);
        videoAsset.setAttribute(
          "src",
          "http://127.0.0.1:5500/assets/videos/2_naim.mp4"
        );
      } else if (
        videoAsset.src === "http://127.0.0.1:5500/assets/videos/2_naim.mp4"
      ) {
        console.log(videoAsset.src);
        videoAsset.setAttribute(
          "src",
          "http://127.0.0.1:5500/assets/videos/1_sekou.mp4"
        );
      }

      videoAsset.load();
      video1.play();
    } else if (!video2.paused) {
      let videoAsset = document.querySelector("#video2");
      console.log(videoAsset.src);
      video2.pause();
      video2.currentTime = 0;
      if (
        videoAsset.src === "http://127.0.0.1:5500/assets/videos/1_sekou.mp4"
      ) {
        console.log(videoAsset.src);
        videoAsset.setAttribute(
          "src",
          "http://127.0.0.1:5500/assets/videos/3_juliette.mp4"
        );
      } else if (
        videoAsset.src === "http://127.0.0.1:5500/assets/videos/3_juliette.mp4"
      ) {
        console.log(videoAsset.src);
        videoAsset.setAttribute(
          "src",
          "http://127.0.0.1:5500/assets/videos/2_naim.mp4"
        );
      } else if (
        videoAsset.src === "http://127.0.0.1:5500/assets/videos/2_naim.mp4"
      ) {
        console.log(videoAsset.src);
        videoAsset.setAttribute(
          "src",
          "http://127.0.0.1:5500/assets/videos/1_sekou.mp4"
        );
      }

      videoAsset.load();
      video2.play();
    } else if (!video3.paused) {
      let videoAsset = document.querySelector("#video3");
      console.log(videoAsset.src);
      video3.pause();
      video3.currentTime = 0;
      if (
        videoAsset.src === "http://127.0.0.1:5500/assets/videos/1_sekou.mp4"
      ) {
        console.log(videoAsset.src);
        videoAsset.setAttribute(
          "src",
          "http://127.0.0.1:5500/assets/videos/3_juliette.mp4"
        );
      } else if (
        videoAsset.src === "http://127.0.0.1:5500/assets/videos/3_juliette.mp4"
      ) {
        console.log(videoAsset.src);
        videoAsset.setAttribute(
          "src",
          "http://127.0.0.1:5500/assets/videos/2_naim.mp4"
        );
      } else if (
        videoAsset.src === "http://127.0.0.1:5500/assets/videos/2_naim.mp4"
      ) {
        console.log(videoAsset.src);
        videoAsset.setAttribute(
          "src",
          "http://127.0.0.1:5500/assets/videos/1_sekou.mp4"
        );
      }

      videoAsset.load();
      video3.play();
    }
  });

  nextButton.addEventListener("click", function () {
    if (!video1.paused) {
      let videoAsset = document.querySelector("#video1");
      console.log(videoAsset.src);
      video1.pause();
      video1.currentTime = 0;
      if (
        videoAsset.src === "http://127.0.0.1:5500/assets/videos/1_sekou.mp4"
      ) {
        console.log(videoAsset.src);
        videoAsset.setAttribute(
          "src",
          "http://127.0.0.1:5500/assets/videos/2_naim.mp4"
        );
      } else if (
        videoAsset.src === "http://127.0.0.1:5500/assets/videos/3_juliette.mp4"
      ) {
        console.log(videoAsset.src);
        videoAsset.setAttribute(
          "src",
          "http://127.0.0.1:5500/assets/videos/1_sekou.mp4"
        );
      } else if (
        videoAsset.src === "http://127.0.0.1:5500/assets/videos/2_naim.mp4"
      ) {
        console.log(videoAsset.src);
        videoAsset.setAttribute(
          "src",
          "http://127.0.0.1:5500/assets/videos/3_juliette.mp4"
        );
      }

      videoAsset.load();
      video1.play();
    } else if (!video2.paused) {
      let videoAsset = document.querySelector("#video2");
      console.log(videoAsset.src);
      video2.pause();
      video2.currentTime = 0;
      if (
        videoAsset.src === "http://127.0.0.1:5500/assets/videos/1_sekou.mp4"
      ) {
        console.log(videoAsset.src);
        videoAsset.setAttribute(
          "src",
          "http://127.0.0.1:5500/assets/videos/2_naim.mp4"
        );
      } else if (
        videoAsset.src === "http://127.0.0.1:5500/assets/videos/3_juliette.mp4"
      ) {
        console.log(videoAsset.src);
        videoAsset.setAttribute(
          "src",
          "http://127.0.0.1:5500/assets/videos/1_sekou.mp4"
        );
      } else if (
        videoAsset.src === "http://127.0.0.1:5500/assets/videos/2_naim.mp4"
      ) {
        console.log(videoAsset.src);
        videoAsset.setAttribute(
          "src",
          "http://127.0.0.1:5500/assets/videos/3_juliette.mp4"
        );
      }

      videoAsset.load();
      video2.play();
    } else if (!video3.paused) {
      let videoAsset = document.querySelector("#video3");
      console.log(videoAsset.src);
      video3.pause();
      video3.currentTime = 0;
      if (
        videoAsset.src === "http://127.0.0.1:5500/assets/videos/1_sekou.mp4"
      ) {
        console.log(videoAsset.src);
        videoAsset.setAttribute(
          "src",
          "http://127.0.0.1:5500/assets/videos/2_naim.mp4"
        );
      } else if (
        videoAsset.src === "http://127.0.0.1:5500/assets/videos/3_juliette.mp4"
      ) {
        console.log(videoAsset.src);
        videoAsset.setAttribute(
          "src",
          "http://127.0.0.1:5500/assets/videos/1_sekou.mp4"
        );
      } else if (
        videoAsset.src === "http://127.0.0.1:5500/assets/videos/2_naim.mp4"
      ) {
        console.log(videoAsset.src);
        videoAsset.setAttribute(
          "src",
          "http://127.0.0.1:5500/assets/videos/3_juliette.mp4"
        );
      }

      videoAsset.load();
      video3.play();
    }
  });

  var musicButton = document.getElementById("musicButton");
  var soundButton = document.getElementById("soundButton");

  soundButton.addEventListener("click", function () {
    if (musicButton.textContent === "music_note") {
      musicButton.textContent = "music_off";
      musicButton.classList.add("red-icon");
      video1.muted = true;
      video2.muted = true;
      video3.muted = true;
    } else {
      musicButton.textContent = "music_note";
      musicButton.classList.remove("red-icon");
      video1.muted = false;
      video2.muted = false;
      video3.muted = false;
    }
  });

  
});
