function navi() {
    var x = document.getElementById("topNav");
    if (x.className === "info") {
      x.className += " responsive";
    } else {
      x.className = "info";
    }
  } 

  function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
    
  } 

  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }


var modal = document.getElementById("myModal");

var btn = document.getElementById("resume-btn");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function Alloff(){
  var styles = "display:none";

if(document.getElementById("intro-button").style = styles){
   document.getElementById("intro-overlay").style = styles;
 }

}

