let arrLeft = document.querySelector(".arrow-left");
let arrRight = document.querySelector(".arrow-right");
let slider = document.querySelector(".slider");
let possition = 0;
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
    moveRight();
  }
}

function moveLeft(){
  if(currentSlide < slidesAmount-1) {

    currentSlide++;
    number.innerHTML = currentSlide +1;
    let anim = setInterval(moveIt, 8);

    function moveIt() {
      if (possition !== -currentSlide*percents) {
        possition--;
        slider.style.marginLeft = possition + "%";
      } else {
        clearInterval(anim);
      }
    }
  }

}

function moveRight() {

  if(currentSlide !== 0) {

    currentSlide--;
    number.innerHTML = currentSlide +1;
    let anim = setInterval(moveIt, 8);

    function moveIt() {
      if (possition !== -currentSlide*percents) {
        possition++;
        slider.style.marginLeft = possition + "%";
      } else {
        clearInterval(anim);

      }
    }
  }
}
