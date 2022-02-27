init();

capituloActual=1;

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
// -
function setCapitulo(nextOrder){
  var lista={
    1:"1.mp4",
    2:"2.mp4"
  };

  Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

  var size = Object.size(lista);

  if(nextOrder=="next"&&capituloActual<size){
    capituloActual+=1;
  }else if(nextOrder=="back"&&capituloActual>1){
    capituloActual-=1;
  }else if (nextOrder=="next"&&capituloActual==size) {
    capituloActual=1;
  }else if (nextOrder=="back"&&capituloActual==1) {
    capituloActual=size;
  }else{
    alert("Algo está mal escrito");
  }

  return lista[capituloActual];
}
// |
function next(){
  var cap = setCapitulo("next"); 
  setRemplazo(cap);  
}
// (||)
function back(){
  var cap = setCapitulo("back"); 
  setRemplazo(cap);
}



//(!=)
function init(){
  const video = document.getElementById('video');

  video.addEventListener('ended', next);  
}