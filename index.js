setInterval(() => {
    let music=new Audio('sound.mp3');
music.play()
music.volume=0.1;
}, 1000);

document.addEventListener("click",()=>{
    let musicp=new Audio('Music.mp3')
musicp.loop=true;
musicp.play();
})
