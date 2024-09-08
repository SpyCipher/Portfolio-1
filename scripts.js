const menuBtn = document.querySelector(".nav_btn");
const menuBtnIcon = document.querySelector(".nav_btn i");
const dropMenu = document.querySelector(".nav_dropMenu");

menuBtn.onclick = function () {
    dropMenu.classList.toggle("open");
    const isOpen = dropMenu.classList.contains("open");

    menuBtnIcon.className = isOpen
    ? "fa-solid fa-xmark" 
    : "fa-solid fa-bars";
};