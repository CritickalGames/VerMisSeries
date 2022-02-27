init();

var lista={
  1:"1.mp4",
  2:"2.mp4"

};


<<<<<<< HEAD
=======
function setReproductor(){
    var reproducor = 
    document.getElementsByTagName("video");
    return reproducor;
}

function next(){
  reproducor= setReproductor();
  var srcReproductor = reproducor[0].getAttribute("src");
  var cap = "2.mp4";
  var i = srcReproductor.indexOf("video");
  

  if(i>-1){
    i = (i+5);
    var changestr = srcReproductor.substring(i,srcReproductor.length);
    var nuevoVideo = srcReproductor.substring(0,i) + cap;
    reproducor[0].setAttribute("src", nuevoVideo);
  }
}
>>>>>>> parent of 13fc2b5 (Principio de Función única)
/**
function back(){
  var reproducor = 
    document.getElementsByTagName("video");
  var srcReproductor = reproducor[0].getAttribute("src");
  var cap = "1.mp4";
  var i = srcReproductor.indexOf("video");
  

  if(i>-1){
    i = (i+5);
    var changestr = srcReproductor.substring(i,srcReproductor.length);
    var nuevoVideo = srcReproductor.substring(0,i) + cap;
    reproducor[0].setAttribute("src", nuevoVideo);
  }
}**/


function init(){
  const video = document.getElementById('video');

  video.addEventListener('ended', next);  

}


function alertar(){
  alert("FINAL");
}