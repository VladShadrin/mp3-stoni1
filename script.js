document.getElementById("playButton").addEventListener("click", function() {
  let audio = document.getElementById("audio");
  audio.play().catch(error => {
    console.log("Ошибка воспроизведения аудио:", error);
  });
});
