let arrLeft = document.querySelector(".arrow-left");
let arrRight = document.querySelector(".arrow-right");
let slider = document.querySelector(".slider");
let pos = 0;
let currentSlide = 0;
let percents = 100;
let number = document.querySelector(".slides-number")
let slidesAmount = document.querySelectorAll(".slide").length

arrRight.addEventListener("click", whichOne, false);
arrLeft.addEventListener("click", whichOne, false);

function whichOne(e) {
  if (e.target.classList.contains("arrow-right")) {
    moveLeft();
  } else {
    // moveRight();
    console.log('Left click')
  }
}

function moveLeft(){
  if(currentSlide < slidesAmount) {
    let anim = setInterval(moveIt, 8);
    currentSlide--;

    function moveIt() {
      if (pos !== currentSlide*percents) {
        number.innerHTML = currentSlide +1;
        pos--;
        slider.style.marginLeft = pos + "%";
      } else {
        clearInterval(anim);
      }
    }
  }

}

// function moveRight() {
//   increment -= percents;
//   let anim = setInterval(moveIt, 8);
//   function moveIt() {
//     if (pos < increment*percents) {
//       number.innerHTML = increment +1;
//       pos++;
//       slider.style.marginLeft = pos + "%";
//     } else {
//       clearInterval(anim);
//     }
//   }
// }
