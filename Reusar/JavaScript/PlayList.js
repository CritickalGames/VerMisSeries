init();

var lista={
  1:"1.mp4",
  2:"2.mp4"

};

function setReproductor(){
  var reproducor = 
    document.getElementsByTagName("video");
  return reproducor;
}
//  |
function setSrc(){
  reproducor= setReproductor();
  var src = reproducor[0].getAttribute("src");
  return src;
}
// |
function setRemplazo(cap){
  src= setSrc();
  var remplazar = src.indexOf("video");

  if(remplazar>-1){
    remplazar = (remplazar+5);
    var changestr = src.substring(remplazar,src.length);
    var nuevoVideo = src.substring(0,remplazar) + cap;
    reproducor[0].setAttribute("src", nuevoVideo);
  }
}
// |
function next(){
  var cap = lista[2]; 
  setRemplazo(cap);  
}





function back(){
  var reproducor = 
    document.getElementsByTagName("video");
  var src = reproducor[0].getAttribute("src");
  var cap = "1.mp4";
  var i = src.indexOf("video");
  

  if(i>-1){
    i = (i+5);
    var changestr = src.substring(i,src.length);
    var nuevoVideo = src.substring(0,i) + cap;
    reproducor[0].setAttribute("src", nuevoVideo);
  }
}


function init(){
  const video = document.getElementById('video');

  video.addEventListener('ended', next);  

}


function alertar(){
  alert("FINAL");
}