'use strict';

//navbar toggle  

const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggler]");


$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));

// header scroll
const $header = document.querySelector("[data-header]");
window.addEventListener("scroll", e => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");

} );
// add to favorite button 


const $togglebtns = document.querySelectorAll("[data-toggle-btn]");
$togglebtns.forEach($togglebtns => {
     $togglebtns.addEventListener("click" , () => {
        $togglebtns.classList.toggle("active");
     })
});
