/* global AFRAME */
AFRAME.registerComponent("info-panel", {
  init: function () {
    var buttonEls = document.querySelectorAll(".menu-button");
    var fadeBackgroundEl = (this.fadeBackgroundEl =
      document.querySelector("#fadeBackground"));

    this.movieImageEl;
    this.movieTitleEl = document.querySelector("#movieTitle");
    this.movieDescriptionEl = document.querySelector("#movieDescription");

    this.movieInfo = {
      karigurashiButton: {
        title: "Sekou",
        imgEl: document.querySelector("#karigurashiMovieImage"),
        description:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles,",
      },
      kazetachinuButton: {
        title: "Naim",
        imgEl: document.querySelector("#kazetachinuMovieImage"),
        description:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles,",
      },
      ponyoButton: {
        title: "Juliette",
        imgEl: document.querySelector("#ponyoMovieImage"),
        description:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles,",
      },
    };

    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.backgroundEl = document.querySelector("#background");
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener("click", this.onMenuButtonClick);
    }
    this.backgroundEl.addEventListener("click", this.onBackgroundClick);
    this.el.object3D.renderOrder = 9999999;
    this.el.object3D.depthTest = false;
    fadeBackgroundEl.object3D.renderOrder = 9;
    fadeBackgroundEl.getObject3D("mesh").material.depthTest = false;
  },

  onMenuButtonClick: function (evt) {
    var movieInfo = this.movieInfo[evt.currentTarget.id];
    var ScanButton = document.getElementById("scanButton");

    this.backgroundEl.object3D.scale.set(1, 1, 1);

    this.el.object3D.scale.set(1, 1, 1);
    if (AFRAME.utils.device.isMobile()) {
      this.el.object3D.scale.set(1.4, 1.4, 1.4);
    }
    this.el.object3D.visible = true;
    this.fadeBackgroundEl.object3D.visible = true;

    if (this.movieImageEl) {
      this.movieImageEl.object3D.visible = false;
    }
    this.movieImageEl = movieInfo.imgEl;
    this.movieImageEl.object3D.visible = true;

    this.movieTitleEl.setAttribute("text", "value", movieInfo.title);
    this.movieDescriptionEl.setAttribute(
      "text",
      "value",
      movieInfo.description
    );
    ScanButton.classList.add("hide");
  },

  onBackgroundClick: function (evt) {
    var ScanButton = document.getElementById("scanButton");
    this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.visible = false;
    this.fadeBackgroundEl.object3D.visible = false;
    ScanButton.classList.remove("hide");
  },
});
