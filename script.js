document.getElementById("playButton").addEventListener("click", function() {
  const audio = document.getElementById("audio");
  audio.play().catch(error => {
    console.log("Ошибка воспроизведения аудио:", error);
  });
});
