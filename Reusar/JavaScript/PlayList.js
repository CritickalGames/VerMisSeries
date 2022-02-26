init();



function next(){
  var reproducor = 
    document.getElementsByTagName("video");
  var srcReproductor = reproducor[0].getAttribute("src");
  var newValue = "2.mp4";
  var i = srcReproductor.indexOf("video");
  

  if(i>-1){
    i = (i+5);
    var changestr = srcReproductor.substring(i,srcReproductor.length);
    var nuevoVideo = srcReproductor.substring(0,i) + newValue;
    reproducor[0].setAttribute("src", nuevoVideo);
  }
}

function back(){
  var reproducor = 
    document.getElementsByTagName("video");
  var srcReproductor = reproducor[0].getAttribute("src");
  var newValue = "1.mp4";
  var i = srcReproductor.indexOf("video");
  

  if(i>-1){
    i = (i+5);
    var changestr = srcReproductor.substring(i,srcReproductor.length);
    var nuevoVideo = srcReproductor.substring(0,i) + newValue;
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