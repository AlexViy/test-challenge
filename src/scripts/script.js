let arrLeft = document.querySelector(".arrow-left"); //select arrow on the page
let arrRight = document.querySelector(".arrow-right");
let slider = document.querySelector(".slider"); // select slider element on the page
let pos = 0; // declaring the initial slider position (0)
let increment = 0; // decraring increment variable

arrRight.addEventListener("click", slide, false); // listening of clicks on arrow
arrLeft.addEventListener("click", slide, false); // listening of clicks on arrow

function slide(e) { //passing the click event
  if (e.target.classList.contains("arrow-right")) {  // if target of event has "arrow-right" class
    increment += 100; // we increment our increment by desired amount +100 (%)
    console.log(increment) // output current increment to console
    let anim = setInterval(moveIt, 8); // starting moveIt function with interval of 8ms
    function moveIt() { // function that moves the slider
      if (pos === -increment) { // if position equals to desired increment
        clearInterval(anim); // we stop moving the slider
      } else {
        pos--; // decrising the position by 1 each time when setIntervar runs the moveIt function
        slider.style.marginLeft = pos + "%"; // writing current position value to actual margin-left CSS property of slider
      }
    }
  } else { // if target of event has not "arrow-right" class
    increment -= 100; // we decrement our increment by desired amount -100 (%)
    console.log(increment) // output current increment to console
    let anim = setInterval(moveIt, 8); // starting moveIt function with interval of 8ms
    function moveIt() { // function that moves the slider
      if (pos === -increment) { // if position equals to desired increment
        clearInterval(anim); // we stop moving the slider
      } else {
        pos++; // incrising the position by 1 each time when setIntervar runs the moveIt function
        slider.style.marginLeft = pos + "%"; // writing current position value to actual margin-left CSS property of slider
      }
    }
  }
}
