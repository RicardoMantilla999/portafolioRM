let menuVisible = false;

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;

}


function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("php");
        habilidades[4].classList.add("node");
        habilidades[5].classList.add("angular");
        habilidades[6].classList.add("bdd");
        habilidades[7].classList.add("rproblemas");
        habilidades[8].classList.add("comunicacion");
        habilidades[9].classList.add("equipo");
        habilidades[10].classList.add("creatividad");
        habilidades[11].classList.add("dedicacion");
        habilidades[12].classList.add("management");
        habilidades[13].classList.add("aprendizaje");
    }
}

window.onscroll = function () {
    efectoHabilidades();
}
