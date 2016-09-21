console.log('Loaded!');

var element = document.getElementById("main-text");
element.innerHTML = "This is the trick";

var img = document.getElementById("madi");
var marginLeft = 0;
var function moveRight() {
    marginLeft += 10px;
    img.style.marginLeft = marginLeft + "px";
}

img.onClick = function () {
    var interval =setInterval(moveRight,10);
}