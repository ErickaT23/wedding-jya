
document.getElementById('playPauseButton').addEventListener('click', function() {
    var audioPlayer = document.getElementById('audioPlayer');
    var icono = document.getElementById('iconoPlayPause');

    if (audioPlayer.paused) {
        audioPlayer.play();
        icono.classList.remove('fa-play');
        icono.classList.add('fa-pause');
    } else {
       audioPlayer.pause();
        icono.classList.remove('fa-pause');
        icono.classList.add('fa-play');
    }
})
