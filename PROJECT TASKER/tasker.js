function log() {
  var btn1 = document.getElementById("btn1").value
  var btn2 = document.getElementById("btn2").value
  var names = "sivaperumal@gmail.com"
  var pass = "4136"


  if (names == btn1 && pass == btn2)
 {
    window.location.href = "tasker2.html"
  }
  else {
    window.alert("invalid")

  }



}



document.getElementById("specialdrop").addEventListener("click", function () {
  document.getElementById("show").classList.toggle("random")
  
})








var popup1 = document.getElementById("popups")

function Popups() {
  popup1.classList.add("popins")
  
}
function Cancel() {
  popup1.classList.remove("popins")

}



// Now popup functions  and also  Creating Button for Add task Delete And Edit button



var empty=document.getElementById("empty")
function Click(){
  var li=document.createElement ("li") 
  li.id=uniqe
  var para=document.createElement("p")
  // var store=document.createElement("store")



  var radio = document.createElement("input");
  radio.classList.add("box")
  radio.type = "checkbox";
  radio.name = "itemRadio";
  radio.classList.add("one");
  radio.addEventListener("change", function () {
      toggleStrike(uniqueId);
  });


  
 


  // this is for new values
  var uniqe="item"+Math.random().toString(36).substring(2,9)




 
 
   
   



 
     
  
  






  var news=document.createElement("button")
  news.textContent="Edit"
  news.classList.add("Edit")
  
 
  var deletes=document.createElement("button")
  deletes.textContent="delete"
  deletes.classList.add("deletes")
  
  

  

  
  // this is for local Storage...

  var username=document.getElementById("username").value
  localStorage.setItem("username",username)
  para.textContent=username
  li.appendChild(news)
  li.appendChild(para)
  li.appendChild(radio)
  // store.appendChild(li)
  li.appendChild(deletes)
  empty.appendChild(li) 

}

















// Adding colour to the button and Moving to the Next page.

var blue =document.getElementById("blue")
var green=document.getElementById("green")
var grey=document.getElementById("grey")
function colour1(){
  blue.classList.toggle("colours1")
  // window.location.href="index3.html"
}
function colour2(){
  green.classList.toggle("colours2")
  window.location.href="index4.html"

}
function colour3(){
  grey.classList.toggle("colours3")  
  window.location.href="index5.html" 
}

function togglestrike(itemId) {
  var item = document.getElementById(itemId);
  var pTags = item.querySelectorAll("p");
  pTags.forEach(function (p) {
      p.classList.toggle("line");
  });
  // radio.checked = !radio.checked;
}