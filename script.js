

function accettaCookie() {
  document.getElementById("cookie-popup").style.display = "none";
}


$(document).ready(function() {
  $('#search-form').on('submit', function(event) {
    event.preventDefault();

    var searchTerm = $('#search-input').val();

    // Esegui la ricerca e visualizza i risultati
    searchProducts(searchTerm);
  });
});





function searchProducts(searchTerm) {
  if (searchTerm.toLowerCase() === 'borse') {
    // Visualizza la pagina delle borse
    displayBorsePage();
  } else if (searchTerm.toLowerCase() === 'scarpe') {
    // Visualizza la pagina delle scarpe
    displayScarpePage();
  } else {
    // Effettua la ricerca dei prodotti corrispondenti al termine di ricerca
    // utilizzando la chiamata AJAX o l'approccio che preferisci
    // ...
    // ...
    // displayProducts(products);
  }
}



var colorSelect = document.getElementById('color');
colorSelect.addEventListener('change', changeBagImage);
function displayBorsePage() {

  // Crea il contenuto della pagina delle borse
  var html = '<a href="borse.html">Scopri i nostri modelli di borse fashion</a>';

  // Visualizza la pagina delle borse nella sezione "products"
  $('#products').html(html);
}


function displayScarpePage() {
  // Crea il contenuto della pagina delle scarpe
  var html = '<a href="scarpe.html">Scopri la nostra collezione di scarpe trendy</a>';

  // Visualizza la pagina delle scarpe nella sezione "products"
  $('#products').html(html);
}






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


function inviaMessaggio() {
      var consensoCheckbox = document.getElementById("checkboxConsenso");
      if (!consensoCheckbox.checked) {
        alert("Devi accettare l'informativa sulla privacy per inviare il messaggio.");
        return false;
      }
      // Resto del codice per l'invio del messaggio
      // ...
      // Se l'invio è completato con successo, mostrare il messaggio di ringraziamento
      document.getElementById("consenso").style.display = "none";
      document.getElementById("messaggio").style.display = "block";
      return false;
    }

 









