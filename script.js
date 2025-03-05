document.getElementById("playButton").addEventListener("click", function() {
    let audio = document.getElementById("audio");
    audio.play().catch(e => console.log("Ошибка при воспроизведении: " + e));
});
