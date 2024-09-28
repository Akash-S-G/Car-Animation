setInterval(() => {
    let music=new Audio('sound.mp3');
music.play()
music.volume=0.1;

}, 1000);
let musicp=new Audio('Music.mp3')
musicp.loop();
window.onload = function() {
    musicp.play();
};

