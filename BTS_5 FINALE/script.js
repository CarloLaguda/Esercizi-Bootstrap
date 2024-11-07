function updateMargin() {// Funzione per aggiornare margini e stili in base alla larghezza dello schermo
    const width = window.innerWidth;
    const carousel = document.getElementById('carosello');// Elementi DOM
    const storia = document.getElementById("Storia");
    const navbar = document.getElementById("navbar");
    const divStoriaPT2 = document.getElementById("storiaPT2");
    const barraPersonaggi = document.getElementById("Personaggi");
    const CardAcquista = document.getElementById("CardAcquista")
    updateCarouselClasses(carousel, width);
    updateStoriaClasses(storia, width);
    updateNavbarClasses(navbar, width);
    updateDivStoriaPT2Classes(divStoriaPT2, width);
    updateBarraPersonaggiClasses(barraPersonaggi, width);
    updateCardAcquistaClasses(CardAcquista, width)
    updateImages('#CardTLOU1 img', width);
    updateImages('#CardTLOU2 img', width);
    updateImages('#CardInfetti img', width);
}
function updateCarouselClasses(carousel, width) {// Aggiornamento delle classi del carosello
    carousel.classList.remove('mt-5', 'mtp2', 'mt-1');
    if (width < 992){
        carousel.classList.add('mt-5');
    }else{
        carousel.classList.add('mtp2');
    } 
}
function updateStoriaClasses(storia, width) {// Aggiornamento delle classi di Storia
    if (width < 768) {
        storia.classList.add('mtp2');
        storia.classList.remove('mtp');
    } else {
        storia.classList.add('mtp');
        storia.classList.remove('mtp2');
    }
}
function updateNavbarClasses(navbar, width) {// Aggiornamento della Navbar
    if (width < 768){
        navbar.classList.remove('bg-white');
    }else{
        navbar.classList.add('bg-white');
    } 
}
function updateDivStoriaPT2Classes(divStoriaPT2, width) {// Aggiornamento di divStoriaPT2
    if (width < 768) {
        divStoriaPT2.classList.remove('mtp2');
        divStoriaPT2.classList.add('mt-5');
    } else {
        divStoriaPT2.classList.remove('mt-5');
        divStoriaPT2.classList.add('mtp2');
    }
}
function updateBarraPersonaggiClasses(barraPersonaggi, width) {// Aggiornamento della barra dei personaggi
    if (width < 768) {
        barraPersonaggi.classList.remove('w-75', 'rounded-pill');
        barraPersonaggi.classList.add('w-100', 'rounded-lg');
    } else {
        barraPersonaggi.classList.remove('w-100', 'rounded-lg');
        barraPersonaggi.classList.add('w-75', 'rounded-pill');
    }
}
function updateCardAcquistaClasses(CardAcquista, width) {// Aggiornamento della barra dei personaggi
    if (width < 768) {
        CardAcquista.classList.remove('w-75');
        CardAcquista.classList.add('w-100');
    } else {
        CardAcquista.classList.remove('w-100');
        CardAcquista.classList.add('w-75');
    }
}
function updateImages(selector, width) {// Aggiornamento delle immagini
    const images = document.querySelectorAll(selector);
    images.forEach(img => {
        img.classList.toggle('w-75', width < 768);
        img.classList.toggle('w-100', width >= 768);
    });
}
window.onload = function() {
    var audio = document.getElementById("audio");
    audio.play();
    audio.volume = 0.1; // Riproduce il suono quando la pagina è caricata
};
window.addEventListener('resize', updateMargin);// Event listeners per resize e caricamento
document.addEventListener('DOMContentLoaded', updateMargin);
const btn_invia = document.getElementById("btn-send");// Gestione di EmailJS
btn_invia.addEventListener("click", function() {
    emailjs.init('FwFUrgJTRVpl2DELN');
    const contatto = document.getElementById('contact');
    const messaggio = document.getElementById('message');
    if (contatto.value === '' || messaggio.value === '') {
        alert("Completa tutti i campi prima di inviare l'email.");
        return;
    }
    const params = {
        contatto: contatto.value,
        messaggio: messaggio.value
    };
    btn_invia.textContent = 'Invio...';
    emailjs.send("service_vf3n3sk", "template_sd6f2da", params)
    .then(function(response) {
        contatto.value = '';
        messaggio.value = '';
        alert("Email inviata con successo!");
        btn_invia.textContent = 'Invia';
    })
    .catch(function(error) {
        alert("Errore durante l'invio dell'email: " + error);
        btn_invia.textContent = 'Invia';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const buttons = [// Gestione delle card
        { buttonId: 'btnCardParte1', cardId: 'CardTLOU1' },
        { buttonId: 'btnCardParte2', cardId: 'CardTLOU2' },
        { buttonId: 'btnCardInfetti', cardId: 'CardInfetti' }
    ];
    function closeAllCards() {// Funzione per chiudere tutte le card
        buttons.forEach(({ cardId }) => {
            const card = document.getElementById(cardId);
            const bsCollapse = new bootstrap.Collapse(card, { toggle: false });
            bsCollapse.hide();
        });
    }
    function toggleCard(cardId) {// Funzione per alternare la visualizzazione di una card
        closeAllCards();
        const selectedCard = document.getElementById(cardId);
        const bsCollapse = new bootstrap.Collapse(selectedCard, { toggle: true });
        bsCollapse.show();
    }
    function updateButtonStyles(clickedButton) {// Funzione per gestire il cambio di classe dei pulsanti
        buttons.forEach(({ buttonId }) => {
            const button = document.getElementById(buttonId);
            if (button === clickedButton) {
                button.classList.remove('btn-light');
                button.classList.add('btn-dark');
                button.classList.remove('text-body');
                button.classList.add("text-white"); // Imposta il testo su nero
            } else {
                button.classList.remove('btn-dark');
                button.classList.add('btn-light');
                button.classList.remove('text-white');
                button.classList.add("text-body"); // Ripristina il colore del testo (valore di default)
            }
        });
    }
    buttons.forEach(({ buttonId, cardId }) => { // Aggiungi gli event listener per i pulsanti
        const button = document.getElementById(buttonId);
        button.addEventListener('click', function () {
            updateButtonStyles(button);// Cambia la grafica dei pulsanti
            toggleCard(cardId); // Alterna la visualizzazione delle card
        });
    });
});
