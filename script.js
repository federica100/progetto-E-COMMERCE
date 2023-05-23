//Initialize Swiper

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


const imgElement = document.querySelector('.hover-image');
const defaultSrc = imgElement.getAttribute('src');
const hoverSrc = imgElement.getAttribute('data-hover-src');

imgElement.addEventListener('mouseenter', () => {
  imgElement.setAttribute('src', hoverSrc);
});

imgElement.addEventListener('mouseleave', () => {
  imgElement.setAttribute('src', defaultSrc);
});





function visualizzaTaglie() {
  var taglie = document.getElementById("taglie");
  var taglieup = document.getElementById("taglieup");
  var tagliedown = document.getElementById("tagliedown");
  if (taglie.style.display === "none") {
    taglie.style.display = "block";
    taglieup.style.display = "block";
    tagliedown.style.display = "none";
  } else {
    taglie.style.display = "none";
    taglieup.style.display = "none";
    tagliedown.style.display = "block";
  }
}
function cambiaTaglia() {
  var taglia = document.getElementById("taglia");
  taglia.value = event.target.innerHTML;
}





