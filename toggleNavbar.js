const hamburguerButton =
    document.getElementsByClassName("hamburguer-button")[0];
const menu = document.getElementsByClassName("menu")[0];
const logo = document.getElementById("swipe-logo");

hamburguerButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburguerButton.classList.toggle("active");
    logo.classList.toggle("active");
});
