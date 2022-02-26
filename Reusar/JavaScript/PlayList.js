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

function setSrcReproductor(){
  reproducor= setReproductor();
  var srcReproductor = reproducor[0].getAttribute("src");
  return srcReproductor;
}


function setIndice(){
  setReproductor=setSrcReproductor();
  var indice = srcReproductor.indexOf("video");
  return indice;
}

function next(){
  var cap = "2.mp4";
  srcReproductor=setSrcReproductor();
  indice=setIndice();

  if(indice>-1){
    indice = (indice+5);
    var changestr = srcReproductor.substring(indice,srcReproductor.length);
    var nuevoVideo = srcReproductor.substring(0,indice) + cap;
    reproducor[0].setAttribute("src", nuevoVideo);
  }
}
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