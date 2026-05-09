let writing = true;
let text = ["Hi, I'm Abdullah, a", "Frontend", "website developer."];
let tempText = ["Hi, I'm Abdullah, a", "Frontend", "website developer."];
window.onload = function(){
  // document.getElementById("menu").addEventListener("click", openMenu);
  // document.getElementById("trans").addEventListener("click", closeMenu);
  
  // const skills = [...document.querySelector("#skills").children];
  // let duration = getComputedStyle(skills[0]).animationDuration;
  // duration = duration.slice(0, -1);
  // skills.forEach((skill, index) => {
  //   skill.style.animationDelay = `-${(duration / skills.length) * index}s`;
  // })
  
  // let menuContent = document.getElementById("menuContent");
  // for (let i = 0; i < menuContent.children.length; i++){
  //   menuContent.children[i].addEventListener("click", moveTo);
  // }
  // document.getElementById("hire").addEventListener("click", openHire)
  // document.getElementById("hire").addEventListener("mouseOver", openHire)
  // document.getElementById("form").addEventListener("submit", sendMessage);
  // setTimeout(typeWriter, 2000);
  const scrolls = [...document.querySelectorAll(".scroll-to")];
  scrolls.map( scroll => {
    scroll.addEventListener("click", moveTo)
  })
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
  let id = event.currentTarget.dataset.target;
  document.getElementById(id).scrollIntoView({block: "start", behavior: "smooth"});
  closeMenu();
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
