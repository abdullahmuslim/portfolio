let writing = true;
let text = ["Hi, I'm Abdullah, a", "Frontend", "website developer."];
let tempText = ["Hi, I'm Abdullah, a", "Frontend", "website developer."];
window.onload = function(){
  document.getElementById("menu").addEventListener("click", openMenu);
  document.getElementById("trans").addEventListener("click", closeMenu);
  
  const skills = [...document.querySelector("#skills").children];
  let duration = getComputedStyle(skills[0]).animationDuration;
  duration = duration.slice(0, -1);
  skills.forEach((skill, index) => {
    skill.style.animationDelay = `-${(duration / skills.length) * index}s`;
  })
  
  let menuContent = document.getElementById("menuContent");
  for (let i = 0; i < menuContent.children.length; i++){
    menuContent.children[i].addEventListener("click", moveTo);
  }
  document.getElementById("hire").addEventListener("click", openHire)
  document.getElementById("hire").addEventListener("mouseOver", openHire)
  document.getElementById("form").addEventListener("submit", sendMessage);
  setTimeout(typeWriter, 2000);
}
function openMenu(){
  let menuContent = document.getElementById("menuContent");
  let trans = document.getElementById("trans");
  menuContent.style.left = 0;
  trans.style.left = 0;
}
function closeMenu(){
  let menuContent = document.getElementById("menuContent");
  let trans = document.getElementById("trans")
  menuContent.style.left = "-101vw";
  trans.style.left = "101vw";
}
function moveTo(event){
  if(event.target === event.currentTarget){
    let id = event.currentTarget.textContent.toLowerCase();
    console.log(id)
    document.getElementById(id).scrollIntoView(true, {block: "start", behavior: "smooth"});
    closeMenu();
  }
}
function openHire(){
  let hireOPtions = document.getElementById("hireOptions");
  for (let i = 0; i < hireOPtions.children.length; i++){
    hireOPtions.children[i].style.display = "flex";
  }
  try{
    let hireP = document.getElementById("hireP");
    hireP.style.textAlign = "left";
    hireP.style.borderBottom = "2px solid #fff";
    hireP.id = "nonSpreadingText";
  }catch(e){}
}
function sendMessage(e){
  e.preventDefault();
  let form = document.getElementById("form");
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let loader = document.getElementById("loader");
  loader.style.display = "flex";
  let feedBack =  document.getElementById("feedBack");
  try{emailjs.send("service_l70zjla","template_sdn1cos",{name, message, email}).then(res => {
      if(res.status === 200){
        //successful
        feedBack.children[0].textContent = "successful";
        feedBack.style.display = "flex";
        loader.style.display = "none";
      }
      else{
        //failed
        feedBack.children[0].textContent = "failed";
        feedBack.style.display = "flex";
      }
      setTimeout(function(){
        feedBack.style.display = "none";
      }, 3000);
    }).catch(error => {
      feedBack.children[0].textContent = "failed. check your internet connection.";
      feedBack.style.display = "flex";
      setTimeout(function(){
        feedBack.style.display = "none";
      }, 3000);
    });}catch(e){
      feedBack.children[0].textContent = "failed. check your internet connection and reload.";
      feedBack.style.display = "flex";
      setTimeout(function(){
        feedBack.style.display = "none";
      }, 3000);
    }
}
function typeWriter(){
  let target = document.getElementById("texts");
  if(writing){
    if(tempText[0].length < text[0].length){
      tempText[0] = text[0].substring(0, tempText[0].length+1);
    }else if(tempText[1].length < text[1].length){
      tempText[1] = text[1].substring(0, tempText[1].length+1);
    }else if(tempText[2].length < text[2].length){
      tempText[2] = text[2].substring(0, tempText[2].length+1);
    }else{
      writing = false;
    }
    let timeoutBe = (writing === true)? setTimeout(typeWriter, 110) : setTimeout(typeWriter, 3000);
  }else{
    if (tempText[2].length > 0){
      tempText[2] = tempText[2].substr(0, tempText[2].length-2);
      if (tempText[2].length <= 0){
        tempText[2] = "";
      }
    }else if (tempText[1].length > 0){
      tempText[1] = tempText[1].substr(0, tempText[1].length-2);
      if (tempText[1].length <= 0){
        tempText[1] = "";
      }
    }else if (tempText[0].length > 0){
      tempText[0] = tempText[0].substr(0, tempText[0].length-2);
      if (tempText[0].length <= 0){
        tempText[0] = "";
        writing = true;
      }
    }
    setTimeout(typeWriter, 100);
  }
  target.innerHTML = `${tempText[0]}<span>&nbsp;${tempText[1]}&nbsp;</span>${tempText[2]}<span id="blinker">&nbsp;</span>`;
}