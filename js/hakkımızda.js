

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

function bizFunction() {
  var x = document.getElementById("biz-kimiz");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function turneFunction() {
  var x = document.getElementById("turnelerimiz");
  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
  }
}

function istatistikFunction() {
  var x = document.getElementById("istatistikler");
  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
  }
}

function salonFunction() {
  var x = document.getElementById("salonlarimiz");
  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

var modal = document.getElementById("yourModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("yourImg");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("exit")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

var modal = document.getElementById("hisModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("hisImg");
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("kapa")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

var modal = document.getElementById("herModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("herImg");
var modalImg = document.getElementById("img04");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("shut")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

var modal = document.getElementById("theyModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("theyImg");
var modalImg = document.getElementById("img05");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("bitir")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

var modal = document.getElementById("themModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("themImg");
var modalImg = document.getElementById("img06");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("final")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}




