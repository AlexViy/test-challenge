let arrLeft = document.querySelector(".arrow-left");
let arrRight = document.querySelector(".arrow-right");
let slider = document.querySelector(".slider");
let pos = 0;
let increment = 0;

arrRight.addEventListener("click", slide, false);
arrLeft.addEventListener("click", slide, false);

function slide(e) {
  if (e.target.classList.contains("arrow-right")) {
    increment += 100;
    console.log(increment)
    let anim = setInterval(moveIt, 8);
    function moveIt() {
      if (pos === -increment) {
        clearInterval(anim);
      } else {
        pos--;
        slider.style.marginLeft = pos + "%";
      }
    }
  } else {
    increment -= 100;
    console.log(increment)
    let anim = setInterval(moveIt, 8);
    function moveIt() {
      if (pos === -increment) {
        clearInterval(anim);
      } else {
        pos++;
        slider.style.marginLeft = pos + "%";
      }
    }
  }
}
