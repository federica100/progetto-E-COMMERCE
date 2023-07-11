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




function accettaInformativa() {
  var checkbox = document.getElementById('checkboxConsenso');
  var messaggio = document.getElementById('messaggio');

  if (checkbox.checked) {
    messaggio.style.display = 'block';
  } else {
    messaggio.style.display = 'none';
  }
}



$(document).ready(function() {
  $('.quantita').on('input', function() {
      calcolaTotale();
  });
});

function calcolaTotale() {
  var totale = 0;
  
  $('.quantita').each(function() {
      var quantita = parseInt($(this).val());
      var prezzo = parseInt($(this).parent().next().text().replace('$', ''));
      totale += quantita * prezzo;
  });

  $('#totale').text('$' + totale);
}








 