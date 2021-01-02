let vid = document.getElementById("bgVideo");
// vid.playbackRate = 0.2;
let sw = screen.width;
let sh =  screen.height;
let duration = 4.202625;
let unit = duration/sw;

const track = (e)=> {
 var x = e.clientX;
  var y = e.clientY;
  var coor = "Coordinates: (" + x + "," + y + ")";
  vid.currentTime = unit*x;
  console.log(coor);
}

