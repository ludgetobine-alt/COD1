// ========== SÉLECTION DES ÉLÉMENTS ==========
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');

// ========== POPUP LOGIN/REGISTER ==========

// Aller vers le formulaire Register
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// Revenir au formulaire Login
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Ouvrir le popup
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    // Fermer le menu mobile si ouvert
    navigation.classList.remove('nav-open');
    hamburger.classList.remove('open');
});

// Fermer le popup
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// ========== MENU HAMBURGER (MOBILE) ==========

// Ouvrir/fermer le menu au clic sur le hamburger
hamburger.addEventListener('click', () => {
    navigation.classList.toggle('nav-open');
    hamburger.classList.toggle('open');
});

// Fermer le menu si on clique en dehors
document.addEventListener('click', (e) => {
    if (!navigation.contains(e.target) && !hamburger.contains(e.target)) {
        navigation.classList.remove('nav-open');
        hamburger.classList.remove('open');
    }
});