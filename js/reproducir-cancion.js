document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("cancion");
  var playButton = document.getElementById("playButton");

  playButton.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      playButton.innerHTML = "Pausar";
    } else {
      audio.pause();
      playButton.innerHTML = "Reproducir";
    }
  });
});
