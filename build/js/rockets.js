// function rocketNav() {
//  const button = document.querySelector('.nav-button');
//  const close = document.querySelector('.navbar');

// function navAct () {
//  close.classList.toggle('hidden');
//  close.classList.toggle('flex');
// }
//  button.addEventListener('click', navAct);
//  close.addEventListener('click', navAct);
// }

// document.addEventListener('DOMContentLoaded', rocketNav)

function rocketNav() {
 const button = document.querySelector('.nav-button');
 const close = document.querySelector('.navbar');

function navAct () {
 close.classList.toggle('hidden');
 close.classList.toggle('flex');
}
 button.addEventListener('click', navAct);
 close.addEventListener('click', navAct);
}

rocketNav();