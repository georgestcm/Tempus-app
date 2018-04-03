$('.typeit-box').typeIt({
  strings: 'Welcome to Tempus, a place where passion leads to career',
  speed: 150,
  deleteSpeed: undefined,
  lifeLike: true,
  cursor: true,
  breakLines: true,
  breakDelay: 750,
  startDelay: 250,
  loop: true,
  loopDelay: 750,
  html: true,
  autoStart: true,
  callback: function(){}
 });

var button = document.getElementsByClassName("button")[0];
function nextPage() { window.location.assign("upDown.html");}
button.addEventListener("click",nextPage,false);

var body = document.getElementById("body");





window.addEventListener("resize",function(){
  if(this.window.innerWidth > 420) {
    console.log(window.innerWidth);
    alert("The current width is" + " "+ window.innerWidth + " and resize it to 420 or less to begin");
    body.style.display = "none";
  } else {
      console.log(window.innerWidth);
    body.style.display = "";
  }

},false);

window.addEventListener("load",function() {
  if(this.window.innerWidth > 420) {
  console.log(window.innerWidth);

   alert("Rezise the window to a smaller width to begin or open Developer tools to resize the viewport of the page to a width of 420 or less."
 + " The current width of the page is"+ " " + window.innerWidth);
  body.style.display = "none";}




},false);
