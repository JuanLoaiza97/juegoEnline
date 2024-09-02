import random from "./randomx.js";
import ocultarModal from "./ocultarModalx.js";
import { winPlayer1, winPlayer2 } from "./ganadorx.js";
import { boton00 , boton01 , boton02 , boton03, boton04, boton05,
         boton10 , boton11 , boton12 , boton13, boton14, boton15,
         boton20 , boton21 , boton22 , boton23, boton24, boton25,
         boton30 , boton31 , boton32 , boton33, boton34, boton35,
         boton40 , boton41 , boton42 , boton43, boton44, boton45,
         boton50 , boton51 , boton52 , boton53, boton54, boton55   
        }  from "./botonesTablerox.js";

var player1; //True o False
var nuevoJuego = false; //Primer Juego
var contador_selecciones = 0; 
var ganador = 0; //0 no ganados, 1 ganador 1, 2 ganador 2, 3 empate
var score1 = 0;
var score2  = 0; 

var matrix = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

const sortearPartida = document.querySelector("#ranGame"); 
const comenzar = document.querySelector('#start');
const activeBoton00 = document.querySelector("#button_active1");
const activeBoton01 = document.querySelector("#button_active2");
const activeBoton02 = document.querySelector("#button_active3");
const activeBoton03 = document.querySelector("#button_active4");
const activeBoton04 = document.querySelector("#button_active5");
const activeBoton05 = document.querySelector("#button_active6");
const activeBoton10 = document.querySelector("#button_active7");
const activeBoton11 = document.querySelector("#button_active8");
const activeBoton12 = document.querySelector("#button_active9");
const activeBoton13 = document.querySelector("#button_active10");
const activeBoton14 = document.querySelector("#button_active11");
const activeBoton15 = document.querySelector("#button_active12");
const activeBoton20 = document.querySelector("#button_active13");
const activeBoton21 = document.querySelector("#button_active14");
const activeBoton22 = document.querySelector("#button_active15");
const activeBoton23 = document.querySelector("#button_active16");
const activeBoton24 = document.querySelector("#button_active17");
const activeBoton25 = document.querySelector("#button_active18");
const activeBoton30 = document.querySelector("#button_active19");
const activeBoton31 = document.querySelector("#button_active20");
const activeBoton32 = document.querySelector("#button_active21");
const activeBoton33 = document.querySelector("#button_active22");
const activeBoton34 = document.querySelector("#button_active23");
const activeBoton35 = document.querySelector("#button_active24");
const activeBoton40 = document.querySelector("#button_active25");
const activeBoton41 = document.querySelector("#button_active26");
const activeBoton42 = document.querySelector("#button_active27");
const activeBoton43 = document.querySelector("#button_active28");
const activeBoton44 = document.querySelector("#button_active29");
const activeBoton45 = document.querySelector("#button_active30");
const activeBoton50 = document.querySelector("#button_active31");
const activeBoton51 = document.querySelector("#button_active32");
const activeBoton52 = document.querySelector("#button_active33");
const activeBoton53 = document.querySelector("#button_active34");
const activeBoton54 = document.querySelector("#button_active35");
const activeBoton55 = document.querySelector("#button_active36");
const siguienteJuego = document.querySelector("#nextButton");
const botonReinicio = document.querySelector("#cleanButton");


function contadorClicks(){
    contador_selecciones +=1;
    if(contador_selecciones===36){
        contador_selecciones = 0; 
    } 
    console.log(matrix);
    console.log(ganador);
}

function puntaje(){
    if(ganador===1){
        score1 += 1; 
        winPlayer1(score1); 
        contador_selecciones = 0; 
    }
    else if(ganador === 2){
        score2 += 1;
        winPlayer2(score2);
        contador_selecciones = 0; 
    }

    else if(ganador === 3){
        contador_selecciones = 0; 
    }
}

sortearPartida.onclick = () => {
    player1 = random(nuevoJuego); 
}

comenzar.onclick = () => {
    ocultarModal();
}

// capta donde se dan los diferentes click en la pantalla, con esta funcion permite quitar el modal desde cualquier parte
window.addEventListener("click",
    function (e){
        let modal = document.querySelectorAll(".modal")[0];
        let modal_container = document.querySelectorAll(".modal-container")[0];

        if(e.target === modal_container){
            modal.classList.toggle("modal-close"); 
            setTimeout(
                function () {
                    modal_container.style.opacity = "0";
                    modal_container.style.visibility = "hidden";
                },
            1000)
        }
    }
);

activeBoton00.onclick = () => {
    var resultado = boton00(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton01.onclick = () => {
    var resultado = boton01(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton02.onclick = () => {
    var resultado = boton02(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton03.onclick = () => {
    var resultado = boton03(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton04.onclick = () => {
    var resultado = boton04(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton05.onclick = () => {
    var resultado = boton05(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton10.onclick = () => {
    var resultado = boton10(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton11.onclick = () => {
    var resultado = boton11(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton12.onclick = () => {
    var resultado = boton12(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton13.onclick = () => {
    var resultado = boton13(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton14.onclick = () => {
    var resultado = boton14(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton15.onclick = () => {
    var resultado = boton15(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton20.onclick = () => {
    var resultado = boton20(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton21.onclick = () => {
    var resultado = boton21(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton22.onclick = () => {
    var resultado = boton22(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton23.onclick = () => {
    var resultado = boton23(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton24.onclick = () => {
    var resultado = boton24(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton25.onclick = () => {
    var resultado = boton25(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton30.onclick = () => {
    var resultado = boton30(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton31.onclick = () => {
    var resultado = boton31(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton32.onclick = () => {
    var resultado = boton32(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton33.onclick = () => {
    var resultado = boton33(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton34.onclick = () => {
    var resultado = boton34(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton35.onclick = () => {
    var resultado = boton35(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton40.onclick = () => {
    var resultado = boton40(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton41.onclick = () => {
    var resultado = boton41(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton42.onclick = () => {
    var resultado = boton42(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton43.onclick = () => {
    var resultado = boton43(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton44.onclick = () => {
    var resultado = boton44(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton45.onclick = () => {
    var resultado = boton45(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton50.onclick = () => {
    var resultado = boton50(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton51.onclick = () => {
    var resultado = boton51(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton52.onclick = () => {
    var resultado = boton52(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton53.onclick = () => {
    var resultado = boton53(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton54.onclick = () => {
    var resultado = boton54(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton55.onclick = () => {
    var resultado = boton55(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}









siguienteJuego.onclick = () => {
    ganador = 0;
    contador_selecciones = 0;
    nuevoJuego = true;

    matrix = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ];
    

    const button_ranGame = document.getElementById("ranGame");
    button_ranGame.disabled = false;
    button_ranGame.style.backgroundColor = "#1A1A40";
    button_ranGame.style.cursor = "pointer";
    const button_next = document.getElementById("nextButton");
    button_next.disabled = true;
    button_next.style.backgroundColor = "gray";
    button_next.style.cursor = "default";

    const img_player1 = document.getElementById("img_player1");
    img_player1.src = "./images/wait.png";
    img_player1.style.width = '80%';

    const img_player2 = document.getElementById("img_player2");
    img_player2.src = "./images/wait.png";
    img_player2.style.width = '80%';

    for(var i=1; i<37 ; i++){
        let string = "button_active"+i;
        document.getElementById(string).innerText = null;
        document.getElementById(string).disabled = true;
        document.getElementById(string).style.cursor = "default";
    }

}

botonReinicio.onclick = () => {
    let option = confirm("¿Está seguro de reiniciar el Juego?")
    if(option){
        location.reload();
    }
}