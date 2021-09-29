const buttons = document.getElementsByTagName("button");

for (const button of buttons) {
  button.addEventListener('click', () => {
    var id = button.getAttribute("id");
     var layerClass = "." + id+ "-layer";
     var layers = document.querySelectorAll(layerClass);
     button.classList.add("fade-out");
     
     for (const layer of layers) {
       layer.classList.toggle("active");
       setTimeout(function(){layer.style.display = 'none'; },1800);
     }
     var element = document.getElementById("all");
     element.classList.add("fade-out");
    });
}   

function delay (URL) {
    setTimeout( function() { window.location = URL }, 800 );
}
