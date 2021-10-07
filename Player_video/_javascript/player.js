var meuVideo = document.getElementById("playerCustom")

function playPause() {
    if (meuVideo.paused) {
        meuVideo.play();
    } else {
        meuVideo.pause();
    }
}

function telaCheia() {
    meuVideo.requestFullscreen();
}

function ampliar() {
    meuVideo.width = 650;
}

function reduzir(){
    meuVideo.width = 300;
} 

function normal(){
    meuVideo.width = 410;
}

function volumeUp(){
    meuVideo.volume += 0.1;
}

function volumeDown(){
    meuVideo.volume -= 0.1;
}
function mute(){
    meuVideo.volume = 0;
}