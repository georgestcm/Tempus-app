var resultParaOne = document.getElementById('paraOne');
var resultParaTwo = document.getElementById('paraTwo');
var otherBestCareer = [];
var ResultObject = window.sessionStorage.getItem("fields");
var finalObject = JSON.parse(ResultObject);
var greatestCurrentNumber = 0;
var bestCareer = "";

console.log(finalObject);

var properties = Object.getOwnPropertyNames(finalObject);


for(var i = 0; i< properties.length; i++) {
  if (finalObject[properties[i]] > greatestCurrentNumber) {
    greatestCurrentNumber = finalObject[properties[i]];
    bestCareer = properties[i];
    console.log(greatestCurrentNumber + " " + bestCareer);

  }
}

resultParaOne.textContent = bestCareer;

for(var i = 0; i < properties.length; i++ ){
  if (finalObject[properties[i]] == greatestCurrentNumber) {
    otherBestCareer.push(properties[i]);
    console.log(otherBestCareer);
}
}
console.log(greatestCurrentNumber);

for(var i =0;  i< otherBestCareer.length; i++){
  if(otherBestCareer[i] == bestCareer) {
      otherBestCareer.shift();

  }
}
console.log(otherBestCareer)

  var text = document.createTextNode = "and";
  var index = otherBestCareer.length;
   for (var i = 0; i < otherBestCareer.length; i++) {
  resultParaTwo.append(text+ " "+ otherBestCareer[i] + " ");
  console.log(otherBestCareer[i]);

    }

    var body = document.getElementById("body");





    window.addEventListener("resize",function(){
      if(this.window.innerWidth > 420) {
        console.log(window.innerWidth);
        alert("rezise the window to a smaller width to display to continue");
        body.style.display = "none";
      } else {
          console.log(window.innerWidth);
        body.style.display = "";
      }

    },false);

    window.addEventListener("load",function() {
      if(this.window.innerWidth > 420) {
        console.log(window.innerWidth);
        alert("rezise the window to a smaller width to display to continue");
        body.style.display = "none";

      }

    },false);

    var submit = document.getElementById("retake");

    submit.addEventListener("click",function() {
      alert("Thank you for using Tempus");
      window.location = "upDown.html";

    })
