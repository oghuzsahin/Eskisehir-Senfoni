

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

/*===== Filterable Gallery with Lightbox ---=====*/
const body = document.body;
const galleryTabs = document.querySelectorAll('.gallery_tabs li');
const galleryItems = document.querySelectorAll('.gallery_item');
const galleryImgs = document.querySelectorAll('.gallery_item img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox_img');
const lightboxCloseBtn = document.querySelector('.lightbox_close');
/*===== Gallery Filtering functionality =====*/
galleryTabs.forEach((currTab) => {
  currTab.addEventListener('click', (e) => {
    // removing the existing 'active' class from the tabs.
    e.target.parentElement.querySelector('.active').classList.remove('active');
    // adding the 'active' class to the currently clicked tab.
    e.target.classList.add('active');
    let filterValue = e.target.getAttribute('data-filter');
    galleryItems.forEach((currItem) => {
      if (filterValue === 'all' || currItem.classList.contains(filterValue)) {
        currItem.classList.remove('hide');
        currItem.classList.add('show');
      }
      else {
        currItem.classList.remove('show');
        currItem.classList.add('hide');
      }
    });
  });
});
/*===== Lightbox functionality =====*/
galleryImgs.forEach((currImg) => {
  currImg.addEventListener('click', (e) => {
    let imgSrc = e.target.getAttribute('src');
    lightboxImg.setAttribute('src', imgSrc);
    lightbox.classList.add('open');
    body.classList.add('overflow_hide');
  });
});
// Function for closing the Lightbox
const lightboxClose = () => {
  lightbox.classList.remove('open');
  body.classList.remove('overflow_hide');
};
// closing the lightbox on clicking the lightboxClose btn.
lightboxCloseBtn.addEventListener('click', lightboxClose);
// closing the lightbox on clicking outside of it.
window.addEventListener('click', (e) => {
  if (e.target.className === 'lightbox_wrapper') {
    lightboxClose();
  }
});
// closing the lightbox on pressing the Escape key.
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    lightboxClose();
  }
});






