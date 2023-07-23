---
theme: default
_class: lead
paginate: true
backgroundColor: #fff
marp: true
footer: https://github.com/federica100/progetto-E-COMMERCE
---




![bg right 50% height: 250px](befashiongrande.png)
# PROGETTO ESAME
**Web Design 2 - Matteo Baccan**
## E-commerce di Borse&Calzature

**Federica Ferrenti**

3° anno Graphic Design and Art Direction

A.A 2022/2023 - ACME NOVARA



--- 

# e-commerce- Be Fashion

 Durante il corso di Web Design 2 abbiamo creato un e-commerce con più pagine ed elementi interattivi

il nome del sito web che ho realizzato è BE FASHION, UN E-COMMERCE DI ACCESSORI (Borse&scarpe)

---
# STRUMENTI

i file per la programmazione del sito sono stati sono HTML, CSS e Javascript.

ho lavorato su Visual studio code e github, successivamente ho pubblicato il repository su netlify a questo indirizzo https://ferrentiprogettoe-commerce.netlify.app/

---
# SUPPORTI

Visual studio code è visual studio code, github e netlify


---
#  Visual Studio Code

Visual studio code è con github e net![bg right 60% height: 30px](visualstudiocode.png)



---

# Chat Gpt AI

Chat gpt mi ha aiutato nella realizzazione di testi e in parte di codici.

```
"mi scrivi una descrizione per una borsa di media grandezza  con più reparti interni con catena dorata e chiusura a bottone"

ChatGPT
Descrizione della borsa di media grandezza con più reparti interni, catena dorata e chiusura a bottone:

"La nostra borsa di media grandezza con più reparti interni è un'opzione perfetta per coloro che cercano un equilibrio ideale tra stile e funzionalità. Questo elegante accessorio è progettato per adattarsi alle esigenze della vita quotidiana, offrendo spazio sufficiente per organizzare i tuoi oggetti personali in modo ordinato e mantenere tutto a portata di mano."
```


---

# Boostraph

Bootstrap è una raccolta di strumenti liberi per lacreazione di siti e applicazioni per il Web. Contienemodelli di progettazione basati su HTML e CSS, eper le varie componenti dell'interfaccia, comemoduli, pulsanti e navigazione.
Divide lo spazio in terzi : 12 colonne.


---
# JQuery


jQuery è una libreria JavaScript cross-browser rilasciata nel 2006. Veloce, versatile ed estensibile, l'API di jQuery consente di gestire con semplicità delle attività che risulterebbero lunghe o complesse in JavaScript.  

![bg right 60% height: 30px](JQuery-Logo.svg.png)


---

# LA CREAZIONE DEL SITO WEB


---

# STRUTTURA

Il sito è composto da 5 pagine: 
Home, Chi siamo, Borse, Scarpe, Carrello, Contatti

Tutte le pagine sono dootate di una struttura base : nav bar con logo e footer.

---

# Home
nella home è presente una nav bar che permette all'utente di andare alla pagina desiderata, come in tutte le pagine.

nella parte sottostante è presente una barra di ricerca che indirizza direttamente alla pagina delle scarpe o delle borse tramite un link

![bg right 50% height: 400px](screeniphone/home.png)


---

# Cookie
All'interno dello home ho inserito un pop up con cookie che indirizza alla pagina della privacy.

![bg right 50% height: 400px](screeniphone/hometelefono.png)

---

```js
function accettaCookie() {
  document.getElementById("cookie-popup").style.display = "none";
}
```
Quando l'utente clicca sul pulsante "Accetta", questa funzione viene chiamata. La sua unica istruzione è quella di nascondere il div dell'avviso dei cookie impostando la proprietà display su "none". In altre parole, l'avviso scompare dalla vista dell'utente quando il pulsante "Accetta" viene cliccato.

---

# Carosello

All'interno dello home ho inserito un carosello che mostra le due principali categorie di prodotti che il mio e-commerce vende: borse e scarpe.

![bg right 50% height: 400px](screeniphone/homeschermata.png)

---

```html
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
  <ol class="carousel-indicators">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>...

```
Questo codice crea un carousel di immagini che scorre automaticamente ogni secondo (intervallo impostato a 1000 millisecondi) e offre anche la possibilità di controllare manualmente lo scorrimento utilizzando i link "Previous" e "Next".

---

# Barra di ricerca

la barra di ricerca inserita effettua una ricerca e genera un link collegato alla pagina delle scarpe o delle borse a seconda del contenuto digitato.

![bg right 50% height: 400px](screeniphone/barradiricerca.png)


---

```html
   <section id="search-bar" class="container">
      <h2>Cerca il tuo prodotto alla moda!</h2>
      <form class="d-flex" id="search-form">
        <input class="form-control me-3" type="text" placeholder="Cerca per categoria..." id="search-input">
        <button class="btn btn-primary" type="submit">Cerca</button>
      </form>
    </section>
 ```
 
 ![bg right 50% height: 400px](screeniphone/barradiricerca2.png)

---

```js
$(document).ready(function() {
  $('#search-form').on('submit', function(event) {
    event.preventDefault();

    var searchTerm = $('#search-input').val();

    // Esegui la ricerca e visualizza i risultati
    searchProducts(searchTerm);
  });
});

```
il codice utilizza jQuery per catturare l'evento di sottoposizione del modulo di ricerca, impedisce il ricaricamento della pagina, ottiene il termine di ricerca inserito dall'utente e lo passa a una funzione chiamata searchProducts() per eseguire la ricerca e visualizzare i risultati.



---

# CHI SIAMO

nella pagina del chi siamo ho inserito una descrizione del brand e una presentazione di quello che i clienti vedranno nell' e-commerce

![bg right 50% height: 400px](screeniphone/chisiamotelefono.png)

---

# BORSE

all'interno della pagina dei prodotti, ho inserito tre tipologie di borse diverse. Cliccando su "visualizza" l'utente verrà indirizzato alla pagina del prodotto in dettaglio.

![bg right 50% height: 400px](screeniphone/borsetelefono.png)


---
# Pagina dettaglio prodotto

in questa pagina l'utente potrà visualizzare il prodotto scelto accompagnati da una descrizione più approfondita e una possibilità di cambio colore.



![bg right 50% height: 400px](screeniphone/coloritelefono.png)

---


![bg right 50% height: 400px](screeniphone/coloreblutelefono.png)


---


# cambio colore js

```js
 function changeBagImage() {
        var colorSelect = document.getElementById('color');
        var selectedColor = colorSelect.value;
        var bagImage = document.querySelector('.bag-image');

        if (selectedColor === 'rosso') {
          bagImage.src = 'immagini/borsarossa-min-min.jpg';
      ...
      }

      var colorSelect = document.getElementById('color');
      colorSelect.addEventListener('change', changeBagImage);
```

la funzione "changeBagImage" viene eseguita quando l'utente cambia l'opzione nel menu a discesa "color". Essa ottiene il colore selezionato e cambia l'immagine della borsa corrispondentemente. L'aggiunta dell'evento "change" al menu a discesa assicura che la funzione venga chiamata ogni volta che l'utente seleziona un colore differente.



---

# SCARPE

all'interno della pagina dei prodotti, ho inserito tre tipologie di scarpe diverse. Cliccando su "visualizza" l'utente verrà indirizzato alla pagina del prodotto in dettaglio.

![bg right 50% height: 400px](screeniphone/scarpetelefono.png)


---

# Pagina dettaglio prodotto

in questa pagina l'utente potrà visualizzare il prodotto scelto accompagnati da una descrizione più approfondita e una possibilità di cambio taglia.

![bg right 50% height: 400px](screeniphonedescrizionescarpetelefono.png)


---

# Cambio taglia 

```js
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
```

 la funzione visualizzaTaglie() consente di mostrare o nascondere le taglie disponibili e gestisce gli stili degli elementi correlati (come le frecce di navigazione) di conseguenza. La funzione cambiaTaglia() viene utilizzata per impostare il valore del campo di input di selezione della taglia in base all'opzione selezionata dall'utente.



---

# CARRELLO

Nella pagina del carrello ho inserito tre prodotti di esempio con il relativo prezzo. grazie all'utlizzo di jquery verrà effettuato il calcolo totale automatico del prezzo totale. Ho aggiunto inoltre la possibilità di rimuovere il prodtto dalla lista.

![bg right 50% height: 400px](screeniphone/carrelloetelefono.png)


---

# Calcolo totale - jquery

```js
$(document).ready(function() {
        $('.quantita').on('input', function() {
          calcolaTotale();
        });
  
        function calcolaTotale() {
          var totale = 0;
  
          $('.quantita').each(function() {
            var quantita = parseInt($(this).val());
            var prezzo = parseInt($(this).closest('tr').find('td:nth-child(3)').text().replace('€', ''));
            totale += quantita * prezzo;
          });
  
          $('#totale').text('€' + totale);
        }
      });
```

La funzione calcolaTotale() calcola il totale dei prodotti moltiplicando la quantità di ciascun prodotto per il suo prezzo unitario. Dopodiché, somma i risultati e imposta il testo di un elemento specifico con l'id "totale" con il valore calcolato, mostrando così il totale aggiornato del carrello.

---

# Rimozione prodotto - html

```js
 $(document).on('click', '.rimuovi-prodotto', function() {
          $(this).closest('tr').remove();
          calcolaTotale();
        });
```

 questa funzione gestisce l'evento di click su un elemento con la classe "rimuovi-prodotto" e rimuove la riga del prodotto corrispondente dalla tabella del carrello. Successivamente, viene chiamata la funzione calcolaTotale() per aggiornare il totale dei prodotti nel carrello dopo la rimozione.




---

# CONTATTI

Nella pagina dei contatti ho inserito le informazioni per contattare il negozio: posizione, telefono, mail.

![bg right 50% height: 400px](screeniphone/contatti.png)


---

# Modulo invio domanda

all'interno della pagina contatti ho anche inserito un modulo che permette all'utente di scrivere un messaggio per chiedere ulteriori informazioni.


![bg right 50% height: 400px](screeniphone/boxdomandatelefono.png)


---

# Modulo invio domanda

```js
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
 ```
Questa funzione gestisce l'invio di un messaggio da un modulo, ma solo se l'utente ha fornito il consenso all'utilizzo dei dati personali, altrimenti mostrerà un avviso. Dopo l'invio del messaggio, viene visualizzato un messaggio di ringraziamento al posto dell'avviso di consenso.

---

# Privacy

Ho inserito inoltre il consenso per la privacy da accettare prima di inviare il messaggio con collegatmento alla pgina dedicata alinformativa sulla privacy.

![bg right 50% height: 400px](screeniphone/grazietelefono.png)


---

```js
function accettaInformativa() {
  var checkbox = document.getElementById('checkboxConsenso');
  var messaggio = document.getElementById('messaggio');

  if (checkbox.checked) {
    messaggio.style.display = 'block';
  } else {
    messaggio.style.display = 'none';
  }
}
```

questa funzione viene chiamata quando l'utente spunta o deseleziona la casella di controllo per accettare l'informativa sulla privacy. Se la casella è spuntata, mostra il messaggio o l'avviso (che potrebbe essere un messaggio di conferma o ringraziamento). Se la casella non è spuntata, nasconde il messaggio. La funzione gestisce quindi la visualizzazione del messaggio in base allo stato della casella di controllo.

---

# QRCODE
![bg right 50% height: 100px](qrcode.png)

---

# RESPONSIVE

![widht: 750px](ipadpro.png)

---
# VALIDATOR


---
# PAGESPEED Insight

è uno strumento gratuito diGoogle che permette di misurare la velocità dicaricamento di una pagina web.

---

# WC3 Validator

W3C Validator
è un validatore del WorldWide Web Consortium che consente agliutenti di Internet di controllare idocumenti HTML e XHTML;
è un passoimportante verso la garanzia della qualitàtecnica delle pagine web.

---

# Grazie per l'attenzione
Federica Ferrenti
