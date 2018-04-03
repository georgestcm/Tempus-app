var main_intro = document.getElementById("main_intro");
var main_intro_button = document.getElementById("main_button")
var up_down_div = document.getElementById("upDown");
var upButton = document.getElementById("upButton");
var downButton = document.getElementById("downButton");
var $para = $('div.main_intro p');
function displayNone() {
  var agree = confirm("You will not be able to return to this page until your discovery journey is finished");
  if (agree == true) {
    main_intro.style.display = "none";
    up_down_div.style.display = "initial";
    if(up_down_div.style.display == "initial"){
      confirm("Tap or click the up arrow for the activities that you enjoy and X for the ones that are not interesting");
    }

  } else {
    alert("You can not move forward until you agree");
  }

}

main_intro_button.addEventListener("click",displayNone,false);

var subjects = {
    "Earth Science": "Agriculture,Food and Natural Resources",
    "Math": "Architecture and Construction",
    "Journalism": "Arts, Audio/Video Technology and Communications",
    "Entrepreneurship": "Business Management and Administration",
    "Public Speaking": "Education and Training",
    "Economics": "Finance",
    "Biology": "Health Science",
    "Culinary Arts": "Hospitality and Tourism",
    "Computer Science": "Information Technology",
    "Debate": "Law, Public Safety, Corrections and Security",
    "Art": "Design",
    "Web Design": "Marketing, Sales and Service",
    "Science": "Science, Technology, Engineering and Mathematics",
    "Teach & Train": "Education and Training",
    "Software Development": "Information Technology",
    "Liberal Arts": "Arts, Audio/Video Technology and Communications",
    "US Government": "Law, Public Safety, Corrections and Security",
    "Fashion Design": "Design",
    "Food Science": "Hospitality and Tourism",
    "Graphic Design": "Marketing, Sales and Service",
    "Business": "Business Management and Administration",
    "Robotics": "Science, Technology, Engineering and Mathematics",
    "Health": "Health Science",
    "Agricultural Science": "Agriculture,Food and Natural Resources",
    "Software Development": "Information Technology",
    "Geometry": "Architecture and Construction",
    "Personal Finance": "Finance",};

var fields = {
    "Agriculture,Food and Natural Resources": 0,
    "Architecture and Construction": 0,
    "Arts, Audio/Video Technology and Communications": 0,
    "Business Management and Administration": 0,
    "Education and Training": 0,
    "Finance": 0,
    "Health Science": 0,
    "Hospitality and Tourism": 0,
    "Information Technology": 0,
    "Law, Public Safety, Corrections and Security": 0,
    "Design": 0,
    "Marketing, Sales and Service": 0,
    "Science, Technology, Engineering and Mathematics": 0
};

var property = Object.getOwnPropertyNames(subjects);

var index = 0;
var para = document.getElementById("property_text");
function load(){ para.textContent = property[index];}
window.addEventListener("load",load,false);


function onClickUp() {
  fields[subjects[property[index]]] +=1;
  index++;
  para.textContent = property[index];
  if(index === property.length){
    var fieldsString = JSON.stringify(fields);
    var saveField = window.sessionStorage.setItem("fieldsObject",fieldsString);
  window.location = 'tap.html';
  console.log(fields);
  }
  }

upButton.addEventListener("click",onClickUp,false);

function onClickDown() {
  index++;
  para.textContent = property[index];
  if(index === property.length){
    var fieldsString = JSON.stringify(fields);
    var saveField = window.sessionStorage.setItem("fieldsObject",fieldsString);
    window.location = 'tap.html';
    console.log(fields);
  }

}

downButton.addEventListener("click",onClickDown,false);

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
