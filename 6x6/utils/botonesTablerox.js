import turno from "./turnox.js";
import validar from "./validarx.js";

var ganador = 0;

function boton00 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active1");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[0][0] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}

function boton01 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active2");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[0][1] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}


function boton02 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active3");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[0][2] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}


function boton03 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active4");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[0][3] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}

function boton04 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active5");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[0][4] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}

function boton05 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active6");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[0][5] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}

function boton10 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active7");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[1][0] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}


function boton11 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active8");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[1][1] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}


function boton12 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active9");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[1][2] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}


function boton13 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active10");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[1][3] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}

function boton14 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active11");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[1][4] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}

function boton15 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active12");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[1][5] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}


function boton20 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active13");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[2][0] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}


function boton21 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active14");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[2][1] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}


function boton22 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active15");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[2][2] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}


function boton23 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active16");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[2][3] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}

function boton24 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active17");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[2][4] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}

function boton25 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active18");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[2][5] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}


function boton30 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active19");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[3][0] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}


function boton31 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active20");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[3][1] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}


function boton32 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active21");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[3][2] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}


function boton33 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active22");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[3][3] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}

function boton34 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active23");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[3][4] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}

function boton35 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active24");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[3][5] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}

//ff

function boton40 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active25");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[4][0] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}


function boton41 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active26");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[4][1] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}


function boton42 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active27");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[4][2] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}


function boton43 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active28");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[4][3] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}

function boton44 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active29");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[4][4] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}

function boton45 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active30");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[4][5] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}

function boton50 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active31");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[5][0] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}


function boton51 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active32");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[5][1] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}


function boton52 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active33");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[5][2] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}


function boton53 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active34");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[5][3] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}

function boton54 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active35");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[5][4] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}

function boton55 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active36");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "#7f00b2";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#014ba0";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[5][5] = player1?"x":"o"; //Condional, si es verdad pone x en esa pos sino o
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
    }

    return [player1, matrix, ganador];
}

export {boton00 , boton01 , boton02 , boton03, boton04, boton05,
        boton10 , boton11 , boton12 , boton13, boton14, boton15,
        boton20 , boton21 , boton22 , boton23, boton24, boton25,
        boton30 , boton31 , boton32 , boton33, boton34, boton35,
        boton40 , boton41 , boton42 , boton43, boton44, boton45,
        boton50 , boton51 , boton52 , boton53, boton54, boton55
    }