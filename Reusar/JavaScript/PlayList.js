init();

var capituloActual=1;

function next(){
  cap=setCapitulo("next");
  setRecortar(cap);
}

function back(){
  cap=setCapitulo("back");
  setRecortar(cap);
}
//set 1
function setReproductor(){
    let reproducor = 
    document.getElementsByTagName("video");
    return reproducor;
}

function setSrcReproductor(){
  reproducor= setReproductor();
  let srcReproductor = reproducor[0].getAttribute("src");
  return srcReproductor;
}


function setIndice(){
  setReproductor=setSrcReproductor();
  let indice = srcReproductor.indexOf("video");
  return indice;
}

function setCapitulo(nextOrBack){
  let lista={
    1:"1.mp4",
    2:"2.mp4"

  };
  size=Object.values(lista).length;

  if (nextOrBack=="next"&&capituloActual<size) {
    capituloActual+=1;
  }else if(nextOrBack=="next"&&capituloActual==size){
    capituloActual=1;
  }else if(capituloActual>1){
    capituloActual-=1
  }else if(capituloActual==1){
    capituloActual=size;
  }
  let cap = lista[capituloActual];
  return cap;
}

function setRecortar(cap){
  srcReproductor=setSrcReproductor();
  indice=setIndice();

  if(indice>-1){
    indice = (indice+5);
    let changestr = srcReproductor.substring(indice,srcReproductor.length);
    let nuevoVideo = srcReproductor.substring(0,indice) + cap;
    reproducor[0].setAttribute("src", nuevoVideo);
  }
}
//set 1 fin

function init(){
  const video = document.getElementById('video');

  video.addEventListener('ended', next);  

}


function alertar(){
  alert("FINAL");
}