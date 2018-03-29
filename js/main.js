'use strict'

const openButton = document.querySelector('.nav-trigger');
const closeButton = document.querySelector('.nav-close');
const menuDisplay = document.querySelector('.nav');

openButton.addEventListener('click', showMenu);
closeButton.addEventListener('click', closeMenu);

function showMenu() {
  menuDisplay.classList.add('nav-visible');
}

function closeMenu() {
  menuDisplay.classList.remove('nav-visible');
}
