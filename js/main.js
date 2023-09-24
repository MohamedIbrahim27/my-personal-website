let sectionskills =document.getElementById("skills");
let progressBar =document.querySelectorAll(".progress span");

window.addEventListener("scroll",function(){
  let sectionPos =sectionskills.getBoundingClientRect().top;
  let screenPos =window.innerHeight / 2;
  if(sectionPos < screenPos){
    progressBar.forEach((span)=> {
      span.style.width = span.dataset.width;
    });
    console.log('show')
  }
});



let anglesup = document.querySelector(".anglesup");
window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
   anglesup.classList.add("active");
  } else {
    anglesup.classList.remove("active");
  }
});
anglesup.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.ul-nav');

menuToggle.addEventListener('click', function() {
  this.classList.toggle('active');
  if (this.classList.contains('active')) {
    this.innerHTML = '<span><i class="fa-solid fa-times"></i></span>';
  } else {
    this.innerHTML = '<span><i class="fa-solid fa-bars"></i></span>';
  }
  menu.classList.toggle('show');
});

