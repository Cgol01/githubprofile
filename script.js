let menuVisible = false;
//Función que oculta o muestra el menú
function mostrarOcultarMenu()
{
    if(menuVisible)
        {
            document.getElementById("nav").classList ="";
            menuVisible = false;
        }
        else
        {
            document.getElementById("nav").classList ="responsive";
            menuVisible = true;
        }
}

function seleccionar()
{
    //oculto el menú una vez que selecciono una opción 
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//funcion que aplica  las animaciones  de las habilidades 
function efectoHabilidades()
{
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300)
        {
            let habilidades =document.getElementsByClassName("progreso");
            habilidades[0].classList.add("javascript"); 
            habilidades[1].classList.add("htmlcss"); 
            habilidades[2].classList.add("nodejs"); 
            habilidades[3].classList.add("comunicacion");
            habilidades[4].classList.add("trabajo");
            habilidades[5].classList.add("resolucion");
            habilidades[6].classList.add("creatividad");
            habilidades[7].classList.add("dedicacion");
            habilidades[8].classList.add("project");
        }
}


//detecto el scrolling para aplicar la animación de la barra de habilidades 
window.onscroll =  function()
{
    efectoHabilidades();
}