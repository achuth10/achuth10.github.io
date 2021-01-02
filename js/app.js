let vid = document.getElementById("bgVideo");
// vid.playbackRate = 0.2;
let sw = screen.width;
let sh =  screen.height;
let duration = 4.202625;
let unit = duration/sw;

window.addEventListener('mousemove',(e)=>{
    let x = e.clientX;
    let y = e.clientY;
    seekToTime(unit*x)
})

const updateTime = (x)=> {
    vid.currentTime = unit*x;
}


function seekToTime(ts) {
  // try and avoid pauses after seeking
  vid.pause();
  vid.currentTime = ts; // if this is far enough away from current, it implies a "play" call as well...oddly. I mean seriously that is junk.
    // however if it close enough, then we need to call play manually
    // some shenanigans to try and work around this:
    var timer = setInterval(function() {
        if (vid.paused && vid.readyState ==4 || !vid.paused) {
            vid.play();
            clearInterval(timer);
        }       
    }, 50);
}