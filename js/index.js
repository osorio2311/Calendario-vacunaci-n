/** 
Todo lo referente a la vacunación
*/



/**
 * todo lo referente a la accesibilidad
 */
document.querySelector("#aumentar").addEventListener("click", ()=>{
    ajustarFuente(1);
})
document.querySelector("#reducir").addEventListener("click", ()=>{
    ajustarFuente(-1);
})
document.querySelector("#escalaGrises").addEventListener("click", escalaGrises);

document.querySelector("#altoContraste").addEventListener("click", altoContraste);

document.querySelector("#reestablecer").addEventListener("click", reestablecerTodo);


function ajustarFuente(cambio){
    let elementos=document.querySelectorAll("body *:not(.accesibilidad):not(.accesibilidad *)"); //Selecciona todos los elementos del body
    elementos.forEach(function(elem){
        let estilo=window.getComputedStyle(elem);//toma el estilo de cada elemento
        let fontSize=parseFloat(estilo.fontSize);
        console.log(fontSize);
        elem.style.fontSize=fontSize+cambio+'px';
    })
}


function escalaGrises(){
    document.body.style.filter="grayscale(100%)";
}



function altoContraste(){
    //document.body.style.filter="contrast(150%) brightness(120%)";
    document.body.style.backgroundColor="#1c1f22";
    let elementos=document.querySelectorAll("body *"); //selecciona todos los elementos del body
    elementos.forEach(function(elem){
        let estilo=window.getComputedStyle(elem);
        elem.style.color="#ffd700";
    })
}


function reestablecerTodo (){
    let elementos=document.querySelectorAll("body *"); //selecciona todos los elementos del body
    elementos.forEach(function(elem){
        let estilo=window.getComputedStyle(elem);
        elem.style.fontSize="";
        elem.style.color="";
    })
    document.body.style.backgroundColor="";
    document.body.style.filter="";
}

function mostrarOcultar(){
    let barra=document.querySelector(".accesibilidad");
    barra.classList.toggle("mostrar");//intercambiar las clases, si la tiene, la quita, sino, la coloca, asi si esta en right -200 o en 0
}







// Despegable. Se crea un array
let tabla = new Map([["2 Meses","Hepatitis B, Difteria-tétanos-tosferina, Poliomielitis, Haemophilus-influenzae b, Enfermedad neumocócica, Enefermedad meningocócica"], ["4 Meses","Hepatitis B, Difteria-tétanos-tosferina, Poliomielitis, Haemophilus-influenzae b, Enfermedad neumocócica, Enefermedad meningocócica"],["11 Meses","Hepatitis B, Difteria-tétanos-tosferina, Poliomielitis, Haemophilus-influenzae b, Enfermedad neumocócica"],["12 Meses","Enfermedad meningocócica, Sarampión-rubeola-parotiditis, Gripe"],["15 Meses","Varicela"],["4 Años", "Sarampión-rubeola-parotiditis, Varicela"]]);
// creamos variable select para seleccionar el id del html despeVacunacion
let select= document.querySelector("#despeVacunacion");
// aqui asociamos edad, vacunas con el array de table que creamos y lo metemos en el elemento que se crea option.
for (let [edad,vacunas] of tabla){
    let edades=document.createElement("option");
    edades.textContent=edad;
    edades.setAttribute("id",edad);
    select.appendChild(edades);
}


select.addEventListener("change",function(){
    let vacunaS = tabla.get(select.value);//get es recuperar el valor que tiene el mapa en la clave que se lee en el select
    // cogemos el id  del html y le decimos que salga "vacunas: vacunaS coge el valor de la tabla"
    document.querySelector("#vacunas").innerHTML="Vacunas: "+ vacunaS;
   

    bordeActivo=vacunaS;
})
