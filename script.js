// ========== SÉLECTION DES ÉLÉMENTS DU DOM ==========

// Le conteneur principal du popup (login + register)
const wrapper = document.querySelector('.wrapper');

// Lien "Login" dans le formulaire Register (pour revenir au login)
const loginLink = document.querySelector('.login-link');

// Lien "Register" dans le formulaire Login (pour aller à l'inscription)
const registerLink = document.querySelector('.register-link');

// Bouton "Login" dans la barre de navigation (ouvre le popup)
const btnPopup = document.querySelector('.btnLogin-popup');

// Bouton X pour fermer le popup
const iconClose = document.querySelector('.icon-close');


// ========== ÉVÉNEMENTS ==========

// Clic sur "Register" → affiche le formulaire d'inscription
// La classe "active" déclenche l'animation CSS vers le formulaire Register
registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

// Clic sur "Login" → revient au formulaire de connexion
// Retire la classe "active" pour revenir au formulaire Login
loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

// Clic sur le bouton "Login" dans la nav → ouvre le popup
// La classe "active-popup" fait apparaître le popup (scale 0 → scale 1)
btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

// Clic sur le bouton X → ferme le popup
// Retire la classe "active-popup" pour faire disparaître le popup
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});