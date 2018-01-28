/* Menu drawer button behaviour */

(()=>{

  let menuBtn = document.querySelector('.menu-btn');

  menuBtn.addEventListener('click', activate);

  function activate(){
    menuBtn.classList.toggle('active');
  }
})();

/* End Of Menu drawer button behaviour */
