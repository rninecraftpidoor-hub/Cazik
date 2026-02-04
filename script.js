function openAuthors() {
    document.getElementById("menu").classList.remove("active");
    document.getElementById("authors").classList.add("active");
}

function backToMenu() {
    document.getElementById("authors").classList.remove("active");
    document.getElementById("menu").classList.add("active");
}
