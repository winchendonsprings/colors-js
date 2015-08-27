function changeRed() {
  document.getElementById("area").className = "make-red";
}

function changeGreen() {
  document.getElementById("area").className = "make-green";
}

function changeBlue() {
  document.getElementById("area").className = "make-blue";
}


window.onload = function() {
  document.getElementById("red").addEventListener( 'click' , changeRed );
  document.getElementById("green").addEventListener( 'click' , changeGreen );
  document.getElementById("blue").addEventListener( 'click' , changeBlue );
}
