

const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");

const siteNav = document.querySelector(".site-nav");
const menuBtn = document.querySelector("#menu-btn");

const menuExit = document.querySelector("#menu-exit");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function(e){
      if (
          !e.composedPath().includes(searchBtn) && !e.composedPath ().includes(searchForm)
          ){
          searchForm.classList.remove("active");
      }
  })
}
);

menuBtn.addEventListener("click", function () {
  siteNav.classList.toggle("active");
  document.addEventListener("click", function(e){
      if (
          !e.composedPath().includes(menuBtn) && !e.composedPath ().includes(siteNav)
          ){
          siteNav.classList.remove("active");
      }
  })
}
);

menuExit.addEventListener("click", function () {
  siteNav.classList.toggle("active");
  document.addEventListener("click", function(e){
      if (
          !e.composedPath().includes(menuExit) && !e.composedPath ().includes(siteNav)
          ){
      }
  })
}
);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("logo").style.width = "10rem";
    document.getElementById("search-btn").style.fontSize = "1.5rem";
    document.getElementById("menu-btn").style.fontSize = "1.5rem";
    document.getElementById("header").style.backgroundColor = "#252525";
    document.getElementById("header").style.paddingTop = "1%";
    document.getElementById("header").style.paddingBottom = "1%";
    document.getElementById("search-deneme").style.top = "30%";
    document.getElementById("search-deneme").style.right = "12%";
  } else {
    document.getElementById("logo").style.width = "20rem";
    document.getElementById("search-btn").style.fontSize = "2.5rem";
    document.getElementById("menu-btn").style.fontSize = "2.5rem";
    document.getElementById("header").style.background = "none";
    document.getElementById("search-deneme").style.top = "40%";
    document.getElementById("search-deneme").style.right = "15%";
  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function alertFunction() {
  alert("Mesajınız İletilmiştir.");
}




