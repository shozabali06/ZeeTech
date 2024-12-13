const menuIcon = document.getElementById("menu");
const crossIcon = document.getElementById("cross");
const mobNav = document.getElementById("mob-nav");

function showMenu() {
    if (mobNav.classList.contains("hidden")){
        mobNav.classList.remove("hidden")
    }
}

function hideMenu(){
    if (!mobNav.classList.contains("hidden")){
        mobNav.classList.add("hidden")
    }
}