function playAudio(file) {
  const player = document.getElementById("player");
  player.src = file;
  player.play();
}
