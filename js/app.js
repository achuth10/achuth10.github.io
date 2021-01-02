let vid = document.getElementById("bgVideo");
let sw = screen.width;
let sh =  screen.height;
let duration = 4.202625;
window.addEventListener('mousemove',(e)=>{
    let x = e.clientX;
    let y = e.clientY;
    updateTime(x);

})



const updateTime = (x)=> {
    let time = duration * x / sw;
    time = time.toFixed(1);
    vid.currentTime = time;
    console.log(time);
}
