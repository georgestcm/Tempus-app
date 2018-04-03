var subjects2 = {
     "Boy/Girl Scout": "Agriculture,Food and Natural Resources",
     "Hand-On Project": "Architecture and Construction",
      "Watch News": "Arts, Audio/Video Technology and Communications",
      "Planning": "Business Management and Administration",
      "Giving Advice": "Education and Training",
      "Manage Money": "Finance",
      "Nurse the Sick": "Health Science",
      "Hosting Events": "Hospitality and Tourism",
      "Edit Software": "Information Technology",
      "Debating": "Law, Public Safety, Corrections and Security",
      "Design Clothes": "Design",
      "Making Posters": "Marketing, Sales and Service",
      "Math Problems": "Science, Technology, Engineering and Mathematics",
     "Tutor Others":"Education and Training",
      "Designing &Build":"Architecture and Construction",
      "Social Medias":"Arts, Audio/Video Technology and Communications",
      "Drawing":"Design",
      "Camping": "Agriculture,Food and Natural Resources",
      "Playing Minecraft":"Science, Technology, Engineering and Mathematics",
      "Repair Computer":"Information Technology",
      "Watch Politics":"Law, Public Safety, Corrections and Security",
      "Leading":"Business Management and Administration",
      "Use Microsoft Office":"Finance",
      "Use Photoshop":"Marketing, Sales and Service",
      "Interact with Animal":"Health Science",
      "Organize Events":"Hospitality and Tourism",
      "Rearrange Room":"Architecture and Construction",
      "Teach others":"Education and Training",
      "Make videos":"Arts, Audio/Video Technology and Communications",
      "Shopping":"Design",
      "Recycling":"Agriculture,Food and Natural Resources",
      "Work with numbers":"Finance",
      "Body Fitness":"Health Science",
      "Use Sketchup":"Science, Technology, Engineering and Mathematics",
      "Coding":"Information Technology",
      "Traveling":"Hospitality and Tourism",
      "Manage Work":"Business Management and Administration",
      "Advertise Events":"Marketing, Sales and Service",
      "Student Goverment":"Law, Public Safety, Corrections and Security",
};

var nxtWords = 13;
var numButtons = 13;
var keys = Object.getOwnPropertyNames(subjects2);
 function onload(){
    for (var i = 0; i < numButtons; i++ ){
      document.getElementById("button" + (i+1)).textContent = keys[i]; }
    };
        window.addEventListener("load",onload,false);


function nextPg() {
    console.log('next page');
     for ( var i = nxtWords; i < nxtWords + numButtons && i < keys.length; i++ ){
         var btn = document.getElementById("button" + (i%numButtons + 1));
         btn.classList.remove("selected");
         btn.textContent = keys[i];
     }
     nxtWords = nxtWords + numButtons ;
      if ( nxtWords > keys.length) {
        var scoreString = JSON.stringify(fields);
        window.sessionStorage.setItem("fields", scoreString);
        alert("you have completed your test journey");
        window.location = 'result.html';
        console.log(fields);
    }
}

var scoreString = window.sessionStorage.getItem("fieldsObject")
var fields = JSON.parse(scoreString)|| {};
console.log(fields);
function onTap(click_id) {
    var selector = "button[id='" + click_id + "']";
    var element = document.querySelector(selector);
    var Button_name = element.textContent.trim();
    var career = subjects2[Button_name];
    var classList = element.classList;
    if (!fields[career]) {
        fields[career] = 0;
    }

    if (classList.contains("selected")) {
        classList.remove("selected");
        fields[career] -= 1;
    } else {
        classList.add("selected");
        fields[career] += 1;  }
     console.log("Value of " + career + " is " + fields[career]);
}

var body = document.getElementById("body");

window.addEventListener("resize",function(){
  if(this.window.innerWidth > 420) {
    console.log(window.innerWidth);
    alert("rezise the window to a smaller width to display to continue");
    body.style.display = "none";
  } else {
      console.log(window.innerWidth);
    body.style.display = "initial";
  }

},false);

window.addEventListener("load",function() {
  if(this.window.innerWidth > 420) {
    console.log(window.innerWidth);
    alert("rezise the window to a smaller width to display to continue");
    body.style.display = "none";

  }

},false);
